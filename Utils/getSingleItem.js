import axios from "axios";

const getSingleItem = (id) => {
  return axios
    .get(`https://nc-marketplace-sem-1.onrender.com/api/items/${id}`)
    .then((res) => res);
};

export default getSingleItem;
