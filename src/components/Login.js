import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND } from '../utils/constants';


const Login = () => {
  const dispatch=useDispatch();
  const [isSignIn, setIsSignIn]=useState(true);
  const [errortext,setErrorText]=useState(null);

  const name= useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  


  //Toggle signIn/SignUp form handler
  const toggleSignInHanler=()=>{
    setIsSignIn(!isSignIn)
  }
  //validation handler
  const ValidationHandler=()=>{
    //validate username and password
    const validatedMessage= checkValidData(email.current.value,password.current.value);
    setErrorText(validatedMessage);
     
    if(validatedMessage) return;

    //SingIn or Signup logic
    if(!isSignIn){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value}).then(() => {
      // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))


      // ...
    }).catch((error) => {
      // An error occurred
      setErrorText(error.message)
    });
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorText(errorMessage+'-'+errorCode);

    // ..
  });


    }else{
      // signIn logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorText(errorMessage+"--"+ errorCode);
  });

}
}

  return (
    <div>
      <Header/>
      <div className=' absolute'>
        <img src={NETFLIX_BACKGROUND} alt='background_login_img'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' rounded-md opacity-80 bg-black w-3/12 p-12 absolute mx-auto left-0 right-0 my-40 text-white'>
        <h1 className='  font-bold text-3xl pb-4'> {isSignIn?'Sign In':'Sign Up'}</h1>
        {
          !isSignIn && <input ref={name} className=' p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white' type='text' placeholder='Full Name' />
          
        }

        <input ref={email} className=' p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white ' type='text' placeholder='Email or phone number' />
       
        <input ref={password} className='p-2 rounded-md my-2 w-full bg-gray-800 placeholder-white ' type='password' placeholder='Password' />

        <p className=' text-red-600 font-bold'>{errortext}</p>

        <button onClick={ValidationHandler} className='my-6 rounded-md p-2 w-full bg-red-700'>{isSignIn?'Sign In':'Sign Up'}</button>
        <p className=' cursor-pointer'onClick={toggleSignInHanler}>{isSignIn?'New to Netflix? Sign Up Now.':'Already Registered? Sign In Now.'}</p>
      </form>
    </div>
  )
}

export default Login