import { Link } from "react-router-dom";
import "./Basket.css";
import basket from "../../../assets/basket.png"

const Basket = () => {
  return (
    <Link className="basket-link" to={"/basket"}>
      {/* Basket */}
      <img src={basket} className="basket" alt="basket" />
    </Link>
  );
};

export default Basket;
