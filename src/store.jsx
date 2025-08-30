import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

const store =configureStore({
    reducer:{
        mycounter:counterReducer
    }
})
export default store;






