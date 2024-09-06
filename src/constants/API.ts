export const BASE_URL = 'http://localhost:13000';

export const API = {
  user: {
    authenticate: BASE_URL + '/user/authenticate',
    register: BASE_URL + '/user/register',
    exists: BASE_URL + '/user/exists',
  },
};
