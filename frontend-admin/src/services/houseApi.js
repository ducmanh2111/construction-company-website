import axios from './axios';

const houseApi = {
  list: () => {
    return axios.get(`/api/v1/user/houses`).then(res => res.data.houses);
  },
  post: (params) => {
    return axios.post(`/api/v1/houses`, params
    , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  },
  get: (id) => {
    return axios.get(`/api/v1/houses/${id}`).then(res => res.data.house);
  },
  patch: (id, params) => {
    return axios.patch(`/api/v1/houses/${id}`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  },
  delete: (id) => {
    return axios.delete(`/api/v1/houses/${id}`).then(res => res);
  }
}

export default houseApi;
