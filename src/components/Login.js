import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn]=useState(true)
  const toggleSignInHanler=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      <div className=' absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background_login_img'/>
      </div>
      <form className=' rounded-md opacity-80 bg-black w-3/12 p-12 absolute mx-auto left-0 right-0 my-40 text-white'>
        <h1 className='  font-bold text-3xl pb-4'> {isSignIn?'Sign In':'Sign Up'}</h1>
        {
          !isSignIn && <input className=' p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white' type='text' placeholder='Full Name' />
        }
        <input className=' p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white' type='text' placeholder='Email or phone number' />
        <input className='p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white' type='password' placeholder='Password' />

        <button onClick={(e)=>e.preventDefault()} className='my-6 rounded-md p-2 w-full bg-red-700'>{isSignIn?'Sign In':'Sign Up'}</button>
        <p className=' cursor-pointer'onClick={toggleSignInHanler}>{isSignIn?'New to Netflix? Sign Up Now.':'Already Registered? Sign In Now.'}</p>
      </form>
    </div>
  )
}

export default Login