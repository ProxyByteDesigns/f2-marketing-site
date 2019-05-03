import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { clearSessionStorage } from 'utils/auth';

const USER_LOGOUT = 'app/USER_LOGOUT';

export function logoutUser() {
  return { type: USER_LOGOUT };
}

export default function createReducer(history, injectedReducers) {
  const appReducer = combineReducers({
    form: formReducer,
    router: connectRouter(history),
    ...injectedReducers
  });

  return (state, action) => {
    if (action.type === USER_LOGOUT) {
      clearSessionStorage();
      state = undefined;
    }

    return appReducer(state, action);
  };
}
