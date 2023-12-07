import { useState, useEffect } from "react";
import getAllItems from "../../../Utils/getAllItems";
import ItemCard from "./ItemCard";

const DisplayItemList = () => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    getAllItems().then((res) => setShopItems(res.data.items));
    //   .then(() => {
    //     if (shopItems.length > 0) {
    //       console.log(shopItems);
    //     }
    //   });
  }, []);

  return (
    <section>
      {shopItems.map((item) => {
        return <ItemCard item={item} key={item.item_id} />;
      })}
    </section>
  );
};

export default DisplayItemList;
