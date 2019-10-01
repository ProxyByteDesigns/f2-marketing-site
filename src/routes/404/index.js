import React from 'react';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="hero">
        <div className="well">
          <h1 className="pink">404</h1>
          <h3 className="green">Page Not Found</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
