import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-40 pr-1'>
        <img  alt='Movie poster' src={POSTER_URL+posterPath}/>
    </div>
  )
}

export default MovieCard