import React,{useState} from 'react'
import  {useDispatch} from "react-redux";
import{pushinterest} from "../Store and slices/interestSlice"

const InterestC = () => {
  const [interest,setinterest]=useState({
    interest:""
  })
  const handlechange=(e)=>{
setinterest({...interest,[e.target.name]:e.target.value})
  }
  const dispatch= useDispatch()
  const handleclick=()=>{
    dispatch(pushinterest(interest))
  }
  return (
    <div>
        <h1>Interest</h1>
            <div className="form-floating">
  <input className="form-control" placeholder="Leave a comment here" name='interest' onChange={handlechange}></input>
  <label for="floatingTextarea">Add your Interest</label>
</div>
<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} onClick={()=>handleclick()}>Save</button>
    </div>
  )
}

export default InterestC
