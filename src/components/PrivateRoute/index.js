import React from 'react';
import { isAuthenticated } from 'utils/auth';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ condition = true, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() === condition ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  condition: PropTypes.bool,
  component: PropTypes.any
};

export default PrivateRoute;
