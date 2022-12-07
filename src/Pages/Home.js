import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import Alertm from '../Components/Alertm'
import Navbar from '../Components/Navbar'
import Scetion from '../Components/Scetion'
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setuser } from '../Store and slices/UserSlice'
const Home = () => {
const dispatch = useDispatch();

  useEffect(()=>{
onAuthStateChanged(auth,user=>{
  if(user) dispatch(setuser(user));
  else dispatch(setuser(null))
})
  },[])
  return (
    <div>
      <Navbar/>
      <Scetion/>
      <Alertm/>
    </div>
  )
}

export default Home
