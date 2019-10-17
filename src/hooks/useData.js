import { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { buildURLQuery } from '../utils/functions';

const useData = (
  contentType,
  options = {},
  staticPage = false,
  permalink = null
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState(0);

  const url = process.env.REACT_APP_API_URL + '/' + contentType + '?';

  let params = [];

  if (permalink && !staticPage) {
    params['permalink'] = permalink;
  }

  if (options.hasOwnProperty('sort')) {
    params['_sort'] = options.sort;
  }

  if (options.hasOwnProperty('limit')) {
    params['_limit'] = options.limit;
  }

  useEffect(() => {
    loadData();
  }, [permalink]);

  const loadData = async () => {
    setLoading(true);

    const res = await fetch(url + buildURLQuery(params));

    res
      .json()
      .then(page => {
        if (page.length === 0) {
          setError('Not Found');
          setStatus(404);
          return;
        }

        setData(
          options.hasOwnProperty('reduce') &&
            options.reduce &&
            page.length === 1
            ? page.shift()
            : page
        );
        setLoading(false);
      })
      .catch(err => {
        setStatus(500);
        setError(err);
      });
  };

  return [status, error, isLoading, data];
};

export default useData;
