import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import DisplayItemList from "./Components/ShopList/DisplayItemList";
import SellItem from "./Components/ShopList/Sell Item/SellItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/items"} element={<DisplayItemList />} />
        <Route path={"/items/sell"} element={<SellItem />} />
      </Routes>
    </>
  );
}

export default App;
