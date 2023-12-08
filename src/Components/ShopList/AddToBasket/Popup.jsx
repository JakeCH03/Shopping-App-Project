import "./Popup.css";
import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className="popup-options">
      <div id="popup-text">Would you like to continue shopping?</div>
      <div className="checkout-options">
        <Link className="link" to={"/items"}>
          <button className="continue">Continue shopping</button>
        </Link>
        <Link className="link" to={"/basket"}>
          <button className="checkout">Go to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
