import axios from "axios";

const deleteItemById = (id) => {
    return axios.delete(`https://nc-marketplace-sem-1.onrender.com/api/items/${id}`)
}

export default deleteItemById