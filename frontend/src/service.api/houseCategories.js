import axios from "axios"

const houseCategoriesApi = {
    getAll: async () => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/house_categories`);
    }
}

export default houseCategoriesApi;
