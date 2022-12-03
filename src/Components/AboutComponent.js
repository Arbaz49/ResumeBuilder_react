import React, { useState } from 'react';
import {useDispatch } from 'react-redux'
import {pushabout} from "../Store and slices/aboutSlice";

const AboutComponent = () => {
  let [about,setabout]=useState({
    about:""
  })
  const handlechange= (e) => {
setabout({...about,[e.target.name]:e.target.value});
console.log(about);
  }
  const dispatch = useDispatch();
  const handleclick= () => {
    dispatch(pushabout(about));
  }

  return (
    <div className='aboutcontainer'>
      <h1>About You</h1>
      <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" name='about' onChange={handlechange}></textarea>
  <label for="floatingTextarea">Add About You</label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default AboutComponent
