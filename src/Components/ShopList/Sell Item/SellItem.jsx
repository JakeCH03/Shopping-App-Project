import { useEffect, useState } from "react";
import sellItems from "../../../../Utils/sellItem";
import "./SellItem.css";

const SellItem = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let data = [{ name }, { desc }, { img }, { price }, { category }];

    sellItems(data).then(() => {
      setName("");
      setDesc("");
      setImg("");
      setPrice("");
      setCategory();
    });
  };

  return (
    <form className="sell-form" onSubmit={onSubmitHandler}>
      <label htmlFor="sell-item-name" className="sell-item-name">
        <span>Item Name</span>
        <input
          id="sell-item-name"
          placeholder="Type here..."
          type="text"
          required
          value={name}
          onChange={nameChangeHandler}
        />
      </label>
      <label htmlFor="description" className="item-description">
        <span>Description</span>
        <input
          id="description"
          placeholder="Type here..."
          type="text"
          value={desc}
          onChange={descChangeHandler}
        />
      </label>
      <label htmlFor="img-url" className="item-url">
        <span>Image URL</span>
        <input
          id="img-url"
          placeholder="Type here..."
          type="url"
          required
          value={img}
          onChange={imgChangeHandler}
        />
      </label>
      <label htmlFor="price" className="item-price">
        <span>Price</span>
        <input
          id="price"
          placeholder="Type here"
          type="number"
          required
          value={price}
          onChange={priceChangeHandler}
        />
      </label>
      <div className="submit-wrapper">
        <label htmlFor="category">
          <select
            id="category"
            name="Categories"
            className="item-category"
            value={category}
            onChange={categoryChangeHandler}
          >
            <option defaultValue="defaultValue">
              Please Select a Category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Household">Household</option>
            <option value="Clothing">Clothing</option>
          </select>
        </label>
        <button type="submit" className="submit-button">
          Submit!
        </button>
      </div>
    </form>
  );
};

export default SellItem;
