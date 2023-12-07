import Basket from "./Basket/Basket";
import "./Header.css";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Basket />
    </header>
  );
};

export default Header;
