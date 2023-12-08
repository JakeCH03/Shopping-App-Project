import { BasketProvider } from "../../Context/BasketContext";
import "./Popup.css"

const Popup = ({id}) => {
    return ( 
            <div className="popup-options">
               <div id="popup-text">Do you want to:</div>
                <div className="checkout-options">
                    <button>Continue shopping</button>
                    <button>Go to checkout</button>
                </div>
            </div>
     );
}
 
export default Popup;