import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Link className="item-wrapper" to={`/items/${item.item_id}`}>
      <h3 className="item-name">{item.item_name}</h3>
      <img className="image" src={item.img_url} />
      <p className="description">{item.description}</p>
    </Link>
  );
};

export default ItemCard;
