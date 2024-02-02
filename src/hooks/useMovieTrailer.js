import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();


   const getMovieTrailer= async()=>{

    const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)

    ;
    const json= await data.json();
    // console.log(json.results.find((video=>video.type==="Trailer")))
    const filteredclip= json.results.filter((video=>video.type==="Trailer"));
    const trailer=filteredclip.length?filteredclip[0]:json.results[0];
    // console.log(trailer);
    dispatch(addTrailer(trailer));


}
useEffect(()=>{
  getMovieTrailer();
},[])
}
export default useMovieTrailer;