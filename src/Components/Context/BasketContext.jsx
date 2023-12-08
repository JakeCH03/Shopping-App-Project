import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = (props) => {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {props.children}
    </BasketContext.Provider>
  );
};
