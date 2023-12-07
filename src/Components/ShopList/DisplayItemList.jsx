import { useState, useEffect } from "react";
import getAllItems from "../../../Utils/getAllItems";
import ItemCard from "./ItemCard";
import "./DisplayItemList.css"
import GetCategories from "./GetCategories";

const DisplayItemList = () => {
  const [shopItems, setShopItems] = useState([]);
  const [category, setCategory] = useState([])

  useEffect(() => {
    getAllItems().then((res) => setShopItems(res.data.items));
  }, []);

  return (
    <>
    <GetCategories setShopItems={setShopItems} setCategory={setCategory} category={category}/>
    <section className="all-items">
      {shopItems.map((item) => {
        return <ItemCard item={item} key={item.item_id} />;
      })}
    </section>
    </>
    
  );
};

export default DisplayItemList;
