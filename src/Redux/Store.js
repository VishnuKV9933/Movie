import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies'

export const store =configureStore({
    reducer:{
        movie:movieReducer
    }
})