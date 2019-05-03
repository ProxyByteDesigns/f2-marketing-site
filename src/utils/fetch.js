import fetch from 'isomorphic-fetch';
import { isAuthenticated, getToken } from './auth';

export const request = (url, params = {}) => {
  if (isAuthenticated()) {
    params = Object.assign(
      {},
      {
        headers: new Headers({
          Authorization: `Bearer ${getToken()}`
        })
      },
      params
    );
  }
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_API_BASE_URL + url, { ...params })
      .then(response => {
        if (response.status !== 200) {
          throw response;
        }
        return response;
      })
      .then(response => {
        if (params.method && params.method === 'POST') {
          return response;
        }
        return response.json();
      })
      .then(resolve)
      .catch(err => {
        if (err.status === 403 || err.status === 401) {
          window.location = '/login';
        }
        reject(err);
      });
  });
};
