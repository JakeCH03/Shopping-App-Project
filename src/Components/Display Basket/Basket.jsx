import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../Context/BasketContext";
import getSingleItem from "../../../Utils/getSingleItem";
import ItemCard from "../ShopList/ItemCard";
import deleteItemById from "../../../Utils/orderItems";
import { Link } from "react-router-dom";

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

  const handleOrder = () => {
    items.forEach(item => deleteItemById(item.item_id))
  }

  if (items.length === context.basket.length) {
    return (
      <div>
        <section className="all-items">
          {items.map((item) => {
            return <ItemCard item={item} key={item.item_id} />;
          })}
        </section>
        <Link className="link" to={"/items"}><button onClick={handleOrder}>Confirm and order</button></Link>
      </div>
    );
  }
};

export default DisplayBasket;
