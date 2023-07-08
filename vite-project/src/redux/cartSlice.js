import { accordionActionsClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice, calcTotalAmount} from "../helpers/calcSlice";

const initialState = {
    products: [],
    amount: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)  => {
            const itemID = action.payload.id;
            const item = state.products.find(item => item.id === itemID)

            if(item) {
                item.amount++
            }else {
                state.products.push({...action.payload, amount: 1});
            }
            state.total = calcTotalPrice(state.products)
            state.amount = calcTotalAmount(state.products)
        },
        increaseAmount: (state, action) => {
            const itemID = action.payload.id;
            const item = state.products.find(item => item.id === itemID)
            item.amount++
            state.total = calcTotalPrice(state.products)
            state.amount = calcTotalAmount(state.products)
        },
        decreaseAmount: (state, action) => {
            const itemID = action.payload.id;
            const item = state.products.find(item => item.id === itemID)

            if(item.amount > 1){
            item.amount--
            } else {
                state.products = state.products.filter(i => i.id !== itemID)
            }
            state.total = calcTotalPrice(state.products)
            state.amount = calcTotalAmount(state.products)
        },
        removeAmount: (state, action) => {
            const itemID = action.payload.id;
            state.products = state.products.filter(i => i.id !== itemID)
            state.total = calcTotalPrice(state.products)
            state.amount = calcTotalAmount(state.products)
        }
    }
})

export const {addToCart, increaseAmount, decreaseAmount, removeAmount} = cartSlice.actions
export default cartSlice.reducer