import React,{useState} from 'react';
import { pusheducation } from '../Store and slices/EducationSlice';
import {useDispatch} from "react-redux"

const Education = () => {
  const [education, seteducation]=useState({
    education:""
  })

  const dispatch=useDispatch();
  const handleclick=()=>{
dispatch(pusheducation(education))
  }
  const handlechange=(e)=>{
seteducation({...education,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <h1>Your Education</h1>
      <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" name='education' onChange={handlechange}></textarea>
  <label for="floatingTextarea">Enter Your Education</label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default Education
