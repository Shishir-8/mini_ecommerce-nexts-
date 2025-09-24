import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item)=> item.id !== action.payload)
        }
    }

})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer