import React from 'react';
import withData from '../../components/withData';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Well from 'components/Well';
import { Helmet } from 'react-helmet';

function Page({ data }) {
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

export default withData(Page, { content_type: 'pages', reduce: true });
