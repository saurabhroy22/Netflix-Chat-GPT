import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch= useDispatch();

    
    const popularMovies= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addPopularMovies(json.results))
        // console.log(json.results);
        
      }
      useEffect(()=>{
     popularMovies();
      },[])
}
export default usePopularMovies;