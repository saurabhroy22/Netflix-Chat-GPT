import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USERAVATAR } from '../utils/constants';

const Header = () => {
  const user= useSelector(store=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const signOutHandler=()=>{
    signOut(auth).then(() => {  }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
    
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate('/browse');

        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')
        }
      });

      //unsubscribing when the component unmounts
      return ()=>unsubscribe();
      
},[])
  

  return (
    <div className=' flex justify-between absolute w-screen bg-gradient-to-br from-black z-10'>
      <img className='w-44'src={LOGO} alt='LOGO'/>

     {   user &&   <div className=' p-2 m-2 flex '>
        <img className='w-10' alt='userIcon' src={USERAVATAR}/>
        <button onClick={signOutHandler} className=' px-2 text-white'>Sign Out</button>
      </div>
     }
    </div>
  )
   
  
}

export default Header