import axios from "axios";

const houseApi = {
    findByCatId: async (catId) => {
        return await axios.get(`http://localhost:4001/api/v1/user/houses?house_category_id=${catId}`)
    },
    findById: async (id) => {
        return await axios.get(`http://localhost:4001/api/v1/user/houses/${id}`)
    }
}

export default houseApi;
