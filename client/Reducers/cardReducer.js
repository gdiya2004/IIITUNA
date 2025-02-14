const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        const { id, price, service } = action.payload;
        console.log("ddeeeeeeeeee iddddd",price);
        
        let existingItem = state.cart.find((item) => item.id === id);

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

    return state;
};

export default cartReducer;
