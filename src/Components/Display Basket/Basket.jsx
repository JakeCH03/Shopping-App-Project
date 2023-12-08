import { useContext, useEffect, useState } from "react";
import { BasketContext, BasketProvider } from "../Context/BasketContext";
import getSingleItem from "../../../Utils/getSingleItem";
import ItemCard from "../ShopList/ItemCard";

const DisplayBasket = () => {
  const context = useContext(BasketContext);
  console.log(context.basket);
  const [items, setItems] = useState([]);

  useEffect(() => {
    context.basket.map((item) => {
      getSingleItem(item).then((res) => {
        setItems((curr) => [res.data.item, ...curr]);
      });
    });
  }, [])

  if (items.length === context.basket.length) {
    return (
      <section className="all-items">
        {items.map((item) => {
          return <ItemCard item={item} key={item.item_id} />;
        })}
      </section>
    );
  }
};

export default DisplayBasket;
