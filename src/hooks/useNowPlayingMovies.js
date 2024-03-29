import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowplayingMovies=()=>{
    const dispatch= useDispatch();

    
    const nowPlayingMovies= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addNowPlayingMovies(json.results))
        // console.log(json.results);
        
      }
      useEffect(()=>{
     nowPlayingMovies();
      },[])
}
export default useNowplayingMovies;