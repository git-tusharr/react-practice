import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },

    reducers:{
        colorChange:(state)=>{
            state.color="green";
        }
    }


})

export const {colorChange}=colorSlice.actions;
export default colorSlice.reducer;