import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:"myCount",
    initialState:{
        count:0
    },
    reducers:{
        Increse:(state)=>{
            state.count=state.count+1;
        },
        Decrease:(state)=>{
            state.count=state.count-1;
        },
        Reset:(state)=>{ 
            state.count=0;
        }
    }
})

export const {Increse,Decrease,Reset} =countSlice.actions;
export default countSlice.reducer;