import { useState, useEffect } from "react";
import getAllItems from "../../../Utils/getAllItems";
import ItemCard from "./ItemCard";
import "./DisplayItemList.css";
import GetCategories from "./GetCategories";
import { DualRing } from "react-css-spinners";

const DisplayItemList = () => {
  const [shopItems, setShopItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {getAllItems().then((res) => {
      setIsLoading(false);
      setShopItems(res.data.items);
    })}, 1000)
  }, []);

  if (isLoading) {
    return <DualRing className="spinner" />;
  }
  return (
    <>
      <GetCategories
        setShopItems={setShopItems}
        setCategory={setCategory}
        category={category}
      />
      <section className="all-items">
        {shopItems.map((item) => {
          return <ItemCard item={item} key={item.item_id} />;
        })}
      </section>
    </>
  );
};

export default DisplayItemList;
