import { createContext, useState } from "react";

export const BasketContext = createContext()

export const BasketProvider = (props) => {
    const [basket, setBasket] = useState([]);

    return <BasketContext.Provider setBasket={setBasket} id={props.id} >
        <button onClick={()=>setBasket((curr)=>{[id, ...curr]})}>Continue shopping</button>
    </BasketContext.Provider>
}