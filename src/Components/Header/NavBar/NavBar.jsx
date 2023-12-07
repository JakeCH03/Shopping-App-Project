import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="link-list">
      <li>
        <Link className="link" to={"/items"}>
          Shop
        </Link>
      </li>
      <li>
        <Link className="link" to={"/items/sell"}>
          Sell
        </Link>
      </li>
      <li>
        <Link className="link" to={"/profile"}>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
