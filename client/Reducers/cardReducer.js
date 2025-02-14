const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        const { id, price, service } = action.payload;
        console.log("ddeeeeeeeeee iddddd",id);
        
        let existingItem = state.cart.find((item) => item.id === id);
            console.log("Existing item ",existingItem);
            
        let updatedCart;
        if (existingItem) {
            updatedCart = state.cart.map((item) =>
                item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            );
        } else {
            updatedCart = [...state.cart, { id, price, service, quantity: 1 }];
        }

        let total_amount = updatedCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        return {
            ...state,
            cart: updatedCart,
            total_amount,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );

        let total_amount = updatedCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        return {
            ...state,
            cart: updatedCart,
            total_amount,
        };
    }
    // if(action.type==="GET_TOTAL_VALUE"){
    //     let total_value=state.cart.reduce((initialState,curElm)=>{
    //         let{price}=curElm
    //         initialState=initialState+(price)
    //         return initialState;
    //     },0)
    //     return {
    //         ...state,
    //         total_price:total_value
    //     }
    // }

    return state;
};

export default cartReducer;
