import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducers/cardReducer"

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, price, service) => {
    console.log("myyyyyyyy iadd",price);
    
    dispatch({ type: "ADD_TO_CART", payload: { id,price,service } });
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