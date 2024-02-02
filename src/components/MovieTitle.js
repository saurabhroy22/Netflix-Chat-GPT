import React from 'react'
import { PLAYER_ICON } from '../utils/constants'

const MovieTitle = ({title,overview}) => {
  
  return (
    <div className=' absolute pt-[25%] px-4 text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className=' font-bold text-3xl py-2'>{title}</h1>
      <p className='  py-3 w-1/2'>{overview}</p>
      <div className=''>
        <button className=' bg-white text-black px-4 py-2 rounded-sm  text-xl hover:bg-opacity-80'>▶Play</button>
        <button className=' mx-2 bg-gray-800 text-white px-4 py-2 rounded-sm  text-xl hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle