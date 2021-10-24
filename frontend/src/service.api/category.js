import axios from "axios"

const cateApi = {
    getAll: async () => {
        return await axios.get(`http://localhost:4001/api/v1/user/house_categories`);
    }
}

export default cateApi;
