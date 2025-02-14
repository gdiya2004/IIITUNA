import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducers/productReducer";
import { productsData } from "../src/data/services";

const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
  featureProducts: [],
  isError: false,
  isSingleLoading: false,
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch all products on mount
  useEffect(() => {
    console.log("In the context of products", productsData);
    dispatch({ type: "SET_ALL_PRODUCTS_DATA", payload: productsData });
  }, []);

  // Function to get a single product by ID
  const getSingleProduct = (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    console.log("🔍 Fetching single product with ID:", id);
    console.log("Products",productsData);

    try {
      console.log("Products",productsData);
      if (!productsData || !Array.isArray(productsData)) {
        console.error("🚨 productsData is not an array or is undefined inside try block");
        dispatch({ type: "SET_SINGLE_ERROR" });
        return;
    }
    const singleProduct = productsData.find(
      (product) => product.id === Number(id)
  );

  console.log("Product data", singleProduct); // If this doesn’t log, .find() is failing

  if (singleProduct) {
      console.log("✅ Product Found:", singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  } else {
      console.error("❌ Product not found for ID:", id);
      dispatch({ type: "SET_SINGLE_ERROR" });
  }
} catch (error) {
  console.error("🚨 Error fetching product:", error);
  dispatch({ type: "SET_SINGLE_ERROR" });
}
};

  // Fetch single product when ID changes
  // useEffect(() => {
  //   if (state.singleProduct.id) {
  //     getSingleProduct(state.singleProduct);
  //   }
  // }, [state.singleProduct.id]);
  

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the product context
const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext, ProductContextProvider, ProductContext };
