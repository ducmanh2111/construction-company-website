import axios from "axios";

const API_HOST = "http://localhost:4001"

axios.interceptors.request.use(function(config) {
  config.url = `${API_HOST}${config.url}`;
  return config;
}, function(error) {
  return Promise.reject(error);
});

export default axios;
