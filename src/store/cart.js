import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    products: [],
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.products = action.payload
        },
        addProduct(state, action) {
            const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id);
            const existingProductItem = state.products[existingProductIndex];
            let updatedItems;
            state.changed = true;
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
            state.changed = true;
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
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;