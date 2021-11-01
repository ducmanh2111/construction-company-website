import axios from './axios';

const roomApi = {
  list: () => {
    return axios.get(`/api/v1/user/rooms`).then(res => res.data.rooms);
  },
  post: (params) => {
    return axios.post(`/api/v1/rooms`, params
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
    return axios.get(`/api/v1/rooms/${id}`).then(res => res.data.room);
  },
  patch: (id, params) => {
    return axios.patch(`/api/v1/rooms/${id}`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  }
}

export default roomApi;
