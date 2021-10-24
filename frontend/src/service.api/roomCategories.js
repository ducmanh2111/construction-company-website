import axios from "axios"

const roomCategoriesApi = {
    getAll: async () => {
        return await axios.get(`http://localhost:4001//api/v1/user/room_categories`)
    }
}

export default roomCategoriesApi;
