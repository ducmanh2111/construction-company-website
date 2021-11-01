import axios from './axios';

const roomCategoryApi = {
  list: () => {
    return axios.get(`/api/v1/user/room_categories`).then(res => res.data);
  }
}

export default roomCategoryApi;
