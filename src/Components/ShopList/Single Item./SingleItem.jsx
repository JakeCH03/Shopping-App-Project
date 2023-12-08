import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getSingleItem from "../../../../Utils/getSingleItem";
import "./SingleItem.css";
import Popup from "../AddToBasket/Popup";

const SingleItem = () => {
  const [item, setItem] = useState([]);
  const [popup, setPopup] = useState(false)

  const data = useParams().item_id;

  const handlePopup = () => {
    setPopup(true)
  }


  useEffect(() => {
    getSingleItem(data).then((res) => {
      setItem(res.data.item);
    });
  }, []);
  return (
    <section className="base-wrapper">
    
    <div className="overlay">{popup && < Popup id={item.item_id}/> } </div>
    <section className="single-item-wrapper">
      <h3 className="single-item-name">{item.item_name}</h3>
      <section className="image-and-content">
        <img className="single-image" src={item.img_url} />
        <div className="single-content-wrapper">
          <h4 className="single-category-name">{item.category_name}</h4>
          <p className="single-description">{item.description}</p>
          <h4 className="single-price">Buy now for £{item.price / 100}!</h4>
        </div>
      </section>
      <div className="single-buttons-wrapper">
        <button className="add-basket" onClick={handlePopup}>Add To Basket</button>
        <button className="give-kudos">Give Kudos</button>
      </div>
    </section></section>
    
  );
};

export default SingleItem;
