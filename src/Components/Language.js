import React, { useState } from 'react';
import  {useDispatch} from "react-redux";
import{pushlanguage} from "../Store and slices/languageSlice"

const Language = () => {
  const [language,setlanguage] =useState({
    language:""
  })
  const handlechange=(e)=>{
    setlanguage({...language,[e.target.name]:e.target.value})
      }
      const dispatch= useDispatch()
      const handleclick=()=>{
        dispatch(pushlanguage(language))
      }
  return (
    <div>
            <h1>Languages</h1>
            <div className="form-floating">
  <input className="form-control" placeholder="Leave a comment here" name='language'  onChange={handlechange}></input>
  <label for="floatingTextarea">Add Language</label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default Language
