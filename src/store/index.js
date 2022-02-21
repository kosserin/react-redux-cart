import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    products: [],
    isShown: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProduct(state, action) {
            const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id);
            const existingProductItem = state.products[existingProductIndex];
            let updatedItems;
            if(existingProductItem) {
                const updatedItem = {
                    ...existingProductItem,
                    amount: existingProductItem.amount + action.payload.amount,
                }
                updatedItems = [...state.products];
                updatedItems[existingProductIndex] = updatedItem;
                state.products = updatedItems;
            }
            else {
                state.products = [...state.products, action.payload]
            }
        },
        removeProduct(state, action) {
            const existingProductIndex = state.products.findIndex(product => product.id === action.payload);
            const existingProductItem = state.products[existingProductIndex];
            let updatedItems;
            if(existingProductItem.amount !== 1) {
                const updatedItem = {
                    ...existingProductItem,
                    amount: existingProductItem.amount - 1
                }
                updatedItems = [...state.products];
                updatedItems[existingProductIndex] = updatedItem;
                state.products = updatedItems;
            } else {
                state.products = state.products.filter(product => product.id !== action.payload)
            }
        },
        showCart(state) {
            state.isShown = !state.isShown
        },
    }
})

const store = configureStore({
    reducer: cartSlice.reducer
})

export const cartActions = cartSlice.actions;

export default store;