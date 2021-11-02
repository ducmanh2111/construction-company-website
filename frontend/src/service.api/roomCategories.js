import axios from "axios"

const roomCategoriesApi = {
    getAll: async () => {
        return await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/user/room_categories`)
    }
}

export default roomCategoriesApi;
