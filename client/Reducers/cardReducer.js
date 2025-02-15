// const cartReducer = (state, action) => {

//     if (action.type === "ADD_TO_CART") {
//         const { id, price, service } = action.payload;
//         console.log("ddeeeeeeeeee iddddd",price);
        
//         let existingItem = state.cart.find((item) => item.id === id);
//             console.log("Existing item ",existingItem);
            
//         let updatedCart;
//         if (existingItem) {
//             updatedCart = state.cart.map((item) =>
//                 item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//             );
//         } else {
//             updatedCart = [...state.cart, { id, price, service, quantity: 1 }];
//         }

//         let total_amount = updatedCart.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//         );

//         return {
//             ...state,
//             cart: updatedCart,
//             total_amount,
//         };
//     }

//     if (action.type === "REMOVE_ITEM") {
//         let updatedCart = state.cart.filter(
//             (curItem) => curItem.id !== action.payload
//         );

//         let total_amount = updatedCart.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//             0
//         );

//         return {
//             ...state,
//             cart: updatedCart,
//             total_amount,
//         };
//     }
//     if(action.type==="GET_TOTAL_AMOUNT"){
//         // let total_value=state.cart.reduce((initialState,curElm)=>{
//         //     let{price}=curElm
//         //     initialState=initialState+(price)
//         //     return initialState;
//         // },0)
//         const total_value = state.cart.reduce((total, item) => total + item.price, 0);

//         return {
//             ...state,
//             total_amount:total_value
//         }
//     }

//     return state;
// };

// export default cartReducer;
const extractPrice = (priceString) => {
    const prices = priceString.replace(/[$,]/g, "").split(" - ").map(Number);
    return prices.length === 2 ? (prices[0] + prices[1]) / 2 : prices[0]; 
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      
      case "ADD_TO_CART": {
        const { id, price, service } = action.payload;
        const newItem = {
          id,
          price: extractPrice(price),
          service, // Convert price to a number
          quantity: 1,
        };
  
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
  
      case "REMOVE_ITEM": {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      }
  
      case "GET_TOTAL_AMOUNT": {
        const total = state.cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
        return {
          ...state,
          total_amount: total.toFixed(2),
        };
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
