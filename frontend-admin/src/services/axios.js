import axios from "axios";
require('dotenv')
const TOKEN_KEY = 'token'

function getToken() {
  const ssStorage = window.sessionStorage.getItem(TOKEN_KEY);
  const accessToken = ssStorage ? JSON.parse(ssStorage).data.data.access_token : null;

  return accessToken;
}

axios.interceptors.request.use(function(config) {
  config.url = `${process.env.REACT_APP_API_HOST}${config.url}`;
  if (!config.url.includes('/login')) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
}, function(error) {
  return Promise.reject(error);
});

export default axios;
