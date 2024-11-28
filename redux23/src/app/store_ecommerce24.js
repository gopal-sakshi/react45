import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from "../ecommerce24/redux-stuff/cart-slice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store