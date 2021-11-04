import axios from './axios';

const roomCategoryApi = {
  list: () => {
    return axios.get(`/api/v1/user/room_categories`).then(res => res.data);
  },
  post: (params) => {
    return axios.post(`/api/v1/room_categories`, params).then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });
  },
  delete: (id) => {
    return axios.delete(`/api/v1/room_categories/${id}`).then(res => res);
  }
}

export default roomCategoryApi;
