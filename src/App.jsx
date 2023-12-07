import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import DisplayItemList from "./Components/ShopList/DisplayItemList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/items"} element={<DisplayItemList />} />
      </Routes>
    </>
  );
}

export default App;
