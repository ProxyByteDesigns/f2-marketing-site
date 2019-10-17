import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Well from 'components/Well';
import { Helmet } from 'react-helmet';
import useData from '../../hooks/useData';
import { withRouter } from 'react-router';

function Page({
  match: {
    params: { permalink }
  }
}) {
  let page = permalink;

  if (page === undefined) {
    page = 'homepage';
  }

  const [status, error, isLoading, data] = useData(
    'pages',
    {
      reduce: true,
      skipRedirect: true
    },
    false,
    page
  );

  if (!data || !data.body) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <Well title={data.title}>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </Well>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Page);
