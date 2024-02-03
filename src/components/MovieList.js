import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title ,nowPlaying}) => {
  if(nowPlaying===null) return;
  
  return (
    <div className=' p-3'> 
            <h1 className=' text-white text-2xl py-2'>{title}</h1>

        <div className=' flex overflow-x-scroll'>
            <div className=' flex '>
              {
              
              nowPlaying.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)
              }
            </div>
        </div>
    </div>
  )
}

export default MovieList