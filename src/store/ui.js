import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isShown: false,
    notification: {
        text: 'start',
        status: 'nista'
    },
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        showCart(state) {
            state.isShown = !state.isShown
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,            
                title: action.payload.title,
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;