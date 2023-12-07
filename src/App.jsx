import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import DisplayItemList from "./Components/ShopList/DisplayItemList";
import SellItem from "./Components/ShopList/Sell Item/SellItem";
import SingleItem from "./Components/ShopList/Single Item./SingleItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/items"} element={<DisplayItemList />} />
        <Route path={"/items/sell"} element={<SellItem />} />
        <Route path={"/items/:item_id"} element={<SingleItem />} />
      </Routes>
    </>
  );
}

export default App;
