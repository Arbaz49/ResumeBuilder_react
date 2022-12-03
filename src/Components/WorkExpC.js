import React,{useState} from 'react';
import { pushwork } from '../Store and slices/workexpSlice';
import {useDispatch} from "react-redux"

const WorkExpC = () => {
  const [work,setwork]=useState({
    profile:"",
    work_info:""

  })
  const handlechange=(e)=>{
    setwork({...work,[e.target.name]:e.target.value})
    
  }
  const dispatch = useDispatch()
  const handleclick=()=>{
    dispatch(pushwork(work))
  }
  return (
    <div>
       <h1>Work Experience</h1>
      <div className="form-floating">
  <input className="form-control" placeholder="Leave a comment here" name='profile' onChange={handlechange}></input>
  <label for="floatingTextarea">Profile...</label>
</div>
<div className="form-floating my-3">
  <textarea className="form-control" placeholder="Leave a comment here" name='work_info' onChange={handlechange}></textarea>
  <label for="floatingTextarea">Enter details about your work Experience </label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default WorkExpC
