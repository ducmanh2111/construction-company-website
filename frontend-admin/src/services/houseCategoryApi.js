import axios from './axios';

const houseCategoryApi = {
  list: () => {
    return axios.get(`/api/v1/user/house_categories`).then(res => res.data);
  }
}

export default houseCategoryApi;
