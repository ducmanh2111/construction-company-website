import axios from "axios";

const houseApi = {
    findByCatId: async (catId) => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/houses?house_category_id=${catId}`)
    },
    findById: async (id) => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/houses/${id}`)
    }
}

export default houseApi;
