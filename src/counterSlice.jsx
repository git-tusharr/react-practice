import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },

    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count=state.count-1;
        }
    }


})

export const {increment,decrement}=countSlice.actions;
export default countSlice.reducer;