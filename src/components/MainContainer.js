import React from 'react'
import MainMoviePlayer from './MainMoviePlayer'
import MovieTitle from './MovieTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie=useSelector(store=>store.movie?.nowPlayingMovies)
    
    if(!movie) return;
    const mainMovie=movie[0];
    // console.log(mainMovie.id)
    const {original_title,overview,id}= mainMovie;
    
  return (
    <div>
        <MovieTitle title={original_title} overview={overview}/>
        <MainMoviePlayer movieId={id}/>
    </div>
  )
}

export default MainContainer