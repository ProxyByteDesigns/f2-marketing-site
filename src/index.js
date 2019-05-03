import 'babel-polyfill';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import configureStore, { history } from './configureStore';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();
const rootEl = document.getElementById('root');

function withApp(rootEl, store, history, WrappedComponent) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <WrappedComponent />
      </ConnectedRouter>
    </Provider>,
    rootEl
  );
}

withApp(rootEl, store, history, App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    withApp(rootEl, store, history, NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
