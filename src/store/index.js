import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui";
import cartSlice from "./cart";



const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})


export default store;