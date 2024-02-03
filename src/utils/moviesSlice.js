import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailer:null,
        trendingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
         state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload;
           },
        addTrendingMovies:(state, action)=>{
            state.trendingMovies=action.payload;
           },
    }
 })

 export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies}=movieSlice.actions
 export default movieSlice.reducer;