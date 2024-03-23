import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
},

reducers:{
    addCart:(state, action)=>{
        state.items.push(action.payload)
    },
    removeItem:(state,action)=>{
        state.items.pop(action.payload)
    },
    clear:(state,action)=>{
        state.items.length=0;
    }
}
});

export const {addCart ,removeItem, clear} = cartSlice.actions

export default cartSlice.reducer
