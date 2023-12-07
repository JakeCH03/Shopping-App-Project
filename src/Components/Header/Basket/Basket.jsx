import { Link } from "react-router-dom";
import "./Basket.css";

const Basket = () => {
  return (
    <Link className="basket-link" to={"/basket"}>
      Basket
    </Link>
  );
};

export default Basket;
