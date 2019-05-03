import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

export const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history);

const middlewares = [thunk, reactRouterMiddleware];

function configureStore(initialState, enhancers) {
  return createStore(rootReducer(history), initialState, enhancers);
}

function configureStoreProd(initialState) {
  return configureStore(initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = configureStore(
    initialState,
    composeEnhancers(
      applyMiddleware(...[reduxImmutableStateInvariant(), ...middlewares])
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const store =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default store;
