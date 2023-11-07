import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    error:'',
    trending:[]
}

const moveiSlice = createSlice({
    name:'movie',
    initialState:INITIAL_STATE,
    reducers:{
       
        setError:(state,action)=>{
            state.error = action.payload
           
        },
        trendingMovies:(state,action)=>{
            state.trending=action.payload
        }
    }
})

export const {trendingMovies,setError} = moveiSlice.actions;
export default moveiSlice.reducer