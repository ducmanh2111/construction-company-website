import axios from './axios';

const houseCategoryApi = {
  list: () => {
    return axios.get(`/api/v1/user/house_categories`).then(res => res.data);
  },
  post: (params) => {
    return axios.post(`/api/v1/house_categories`, params).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  },
  get: (id) => {
    return axios.get(`/api/v1/house_categories/${id}`).then(res => res.data.house);
  },
  patch: (id, params) => {
    return axios.patch(`/api/v1/house_categories/${id}`, params).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  },
  delete: (id) => {
    return axios.delete(`/api/v1/house_categories/${id}`).then(res => res);
  }
}

export default houseCategoryApi;
