import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if (state.cartItems[product.id]) {
                state.cartItems[product.id].quantity += 1;
            } else {
                state.cartItems[product.id] = {
                    ...product,
                    quantity: 1,
                };
            }
        },
        removeFromCart(state, action) {
            const productIdToRemove = action.payload;
            delete state.cartItems[productIdToRemove];
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
