import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducers/cardReducer"

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id,service, price) => {
    console.log("myyyyyyyy iadd",id);
    dispatch({ type: "ADD_TO_CART", payload: { id,service,price } });
    dispatch({type:"GET_TOTAL_AMOUNT"})
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };