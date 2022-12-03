import React, { useState } from 'react';
import  {useDispatch} from "react-redux";
import{pushproject} from "../Store and slices/projectSlice"




const ProjectC = () => {
  const [project,setproject] =useState({
    projecttitle:"",
    projectdetails:"",
  })
  const handlechange=(e)=>{
    setproject({...project,[e.target.name]:e.target.value})
      }
      const dispatch= useDispatch()
      const handleclick=()=>{
        dispatch(pushproject(project))
      }
  return (
    <div>
      <h1>Project</h1>
      <div className="form-floating">
  <input className="form-control" placeholder="Leave a comment here" name='projecttitle' onChange={handlechange}></input>
  <label for="floatingTextarea">Add Title </label>
</div>
<div className="form-floating">
  <textarea className="form-control my-3" placeholder="Leave a comment here" name='projectdetails' handlechange></textarea>
  <label for="floatingTextarea">Add About project</label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default ProjectC
