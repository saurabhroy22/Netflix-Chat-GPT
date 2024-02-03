import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrendingMovie=()=>{
    const dispatch= useDispatch();

    
    const trendingMovies= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addTrendingMovies(json.results))
        // console.log(json.results);
        
      }
      useEffect(()=>{
        trendingMovies();
      },[])
}
export default useTrendingMovie;