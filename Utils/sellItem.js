import axios from "axios";

const sellItems = (data) => {
  let finalData = {
    item_name: data[0].name,
    description: data[1].desc,
    img_url: data[2].img,
    price: data[3].price,
    category_name: data[4].category,
  };
  console.log(finalData);
  return axios
    .post("https://nc-marketplace-sem-1.onrender.com/api/items", finalData)
    .then((res) => console.log(res));
};

export default sellItems;
