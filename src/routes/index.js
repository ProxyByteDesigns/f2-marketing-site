import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Page from './Page';
import NotFound from './404';

export default [
  <Route key="404" path="/404" component={NotFound} />,
  <Route key="post" path="/posts/:permalink?" exact component={Posts} />,
  <Route key="page" path="/:permalink?" exact component={Page} />
];
