import "./Popup.css";
import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className="popup-options">
      <div id="popup-text">Do you want to:</div>
      <div className="checkout-options">
        <Link className="link" to={"/items"}>
          <button>Continue shopping</button>
        </Link>
        <Link className="link" to={"/basket"}>
          <button>Go to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
