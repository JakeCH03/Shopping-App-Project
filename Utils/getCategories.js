import axios from "axios";

const getCategories = () => {
  return axios
    .get("https://nc-marketplace-sem-1.onrender.com/api/categories")
    .then((res) => res);
};

export default getCategories;
