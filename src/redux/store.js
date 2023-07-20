import {configureStore} from '@reduxjs/toolkit';
import cartSlice from "./cartSlice.jsx";

export default configureStore({
    reducer: {
        products: cartSlice
    }
});
