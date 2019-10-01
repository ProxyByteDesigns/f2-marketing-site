import React from 'react';
import fetch from 'isomorphic-fetch';
import { buildURLQuery } from '../utils/functions';
import { Redirect } from 'react-router-dom';

const defaultOptions = {
  skipRedirect: false
};

function withData(WrappedComponent, selectData, options = defaultOptions) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: false,
        data: null,
        permalink: null,
        notFound: false
      };
    }

    componentDidMount() {
      this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
      if (selectData.hasOwnProperty('static') && selectData.static) {
        return;
      }
      const {
        match: {
          params: { permalink }
        }
      } = this.props;

      let page = permalink;

      if (page === undefined) {
        page = 'homepage';
      }

      if (page !== prevState.permalink && page) {
        this.setState(
          {
            permalink: page
          },
          () => {
            this.loadData();
          }
        );
      }
    }

    loadData = () => {
      const { permalink } = this.state;

      this.setState(
        {
          loading: true,
          permalink
        },
        () => {
          let url =
            process.env.REACT_APP_API_URL + '/' + selectData.content_type + '?';
          let params = [];

          if (permalink && !selectData.static) {
            params['permalink'] = permalink;
          }

          if (selectData.hasOwnProperty('sort')) {
            params['_sort'] = selectData.sort;
          }

          if (selectData.hasOwnProperty('limit')) {
            params['_limit'] = selectData.limit;
          }

          fetch(url + buildURLQuery(params))
            .then(response => {
              if (response.status >= 400) {
                throw new Error('404');
              }
              return response.json();
            })
            .then(page => {
              if (page.length === 0) {
                throw new Error('404');
              }
              this.setState({
                data:
                  selectData.hasOwnProperty('reduce') &&
                  selectData.reduce &&
                  page.length === 1
                    ? page.shift()
                    : page,
                loading: false
              });
            })
            .catch(err => {
              this.setState({
                notFound: true
              });
            });
        }
      );
    };

    render() {
      const { notFound } = this.state;
      const { skipRedirect } = options;

      if (notFound && !skipRedirect) {
        return <Redirect to="/404" />;
      }

      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

export default withData;
