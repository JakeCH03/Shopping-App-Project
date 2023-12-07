import axios from "axios";

// const shop = axios.create("https://nc-marketplace-sem-1.onrender.com/api");

const getAllItems = () => {
  return axios
    .get("https://nc-marketplace-sem-1.onrender.com/api/items")
    .then((res) => res);
};

export default getAllItems;
