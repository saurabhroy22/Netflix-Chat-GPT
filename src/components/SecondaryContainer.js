import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movie);

  return ( 
    <div  className=' bg-black'>
    <div className=' -mt-52  relative  '>
      <MovieList title={"Now Playing movies"} nowPlaying={movies?.nowPlayingMovies}/>  
      <MovieList title={"Trendin movies"} nowPlaying={movies?.trendingMovies}/>  
      <MovieList title={"Popular movies"} nowPlaying={movies?.popularMovies}/>  
      <MovieList title={"Award winning movies"} nowPlaying={movies?.popularMovies}/>  
      <MovieList title={"Critically acclaimed movies"} nowPlaying={movies?.popularMovies}/>  
      
      
    </div>
    </div>
  )
}

export default SecondaryContainer