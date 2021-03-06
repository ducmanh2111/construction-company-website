import axios from "axios";

const roomApi = {
    findByCatId: async (catId) => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/rooms?room_category_id=${catId}`)
    },
    findById: async (id) => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/rooms/${id}`)
    },
    findByHouseId: async (houseId) => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/rooms?house_id=${houseId}`)
    }
}

export default roomApi;
