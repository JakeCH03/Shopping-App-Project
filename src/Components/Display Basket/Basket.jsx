import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../Context/BasketContext";
import getSingleItem from "../../../Utils/getSingleItem";
import ItemCard from "../ShopList/ItemCard";
import deleteItemById from "../../../Utils/orderItems";
import { Link } from "react-router-dom";
import "./Basket.css";

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
  }, []);

  const handleOrder = () => {
    items.forEach((item) => deleteItemById(item.item_id));
    context.setBasket([]);
  };

  if (items.length === context.basket.length && items.length > 0) {
    return (
      <div>
        <section className="all-items">
          {items.map((item) => {
            return <ItemCard item={item} key={item.item_id} />;
          })}
        </section>
        <Link className="link" to={"/items"}>
          <button onClick={handleOrder} className="order-button">
            Confirm and order
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <Link className="link" to={"/items"}>
        <div className="no-items-added">
          <p>You have not added anything to your basket!</p>
          <p>Click here to browse the shop</p>
        </div>
      </Link>
    );
  }
};

export default DisplayBasket;
