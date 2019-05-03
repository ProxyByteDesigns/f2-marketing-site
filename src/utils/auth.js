/** global: localStorage */
import { contains } from 'lodash';

import jwtDecode from 'jwt-decode';

const USER_AUTH_TOKEN = 'user_auth_token';
const USER_REFRESH_TOKEN = 'user_refresh_token';

export const getToken = () => localStorage.getItem(USER_AUTH_TOKEN);

export const setToken = token => localStorage.setItem(USER_AUTH_TOKEN, token);

export const removeToken = () => localStorage.removeItem(USER_AUTH_TOKEN);

export const getRefreshToken = () => localStorage.getItem(USER_REFRESH_TOKEN);

export const setRefreshToken = token =>
  localStorage.setItem(USER_REFRESH_TOKEN, token);

export const removeRefreshToken = () =>
  localStorage.removeItem(USER_REFRESH_TOKEN);

export const getUserData = () => isAuthenticated() && jwtDecode(getToken());

export const isAuthenticated = () => !!getToken() && !!getRefreshToken();

export const clearSessionStorage = () => {
  removeToken();
  removeRefreshToken();
};

export const hasRole = (user, role) => {
  if (!user || !user.roles) {
    return false;
  }

  return contains(user.roles, role);
};
