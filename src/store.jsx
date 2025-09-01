import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice"

const store=configureStore({
    reducer:{
        myCount:countReducer
    }
})
export default store;