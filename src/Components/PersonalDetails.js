import React, { useState } from 'react';
import {useDispatch } from 'react-redux'
import {push} from "../Store and slices/PersonalDSlice";
import { useForm } from "react-hook-form";

const PersonalDetails = () => {
  const {handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  let [data,setdata]=useState({
    name:"",
    jobtitle:"",
    email:"",
    address:"",
    number:"",
    birthdate:"",
    nationality:"",
    githublink:""
  })
  const handlechange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});
    console.log(data);
  }
  const dispatch = useDispatch();
  const handlesave=()=>{
    dispatch(push(data));
    setdata({
      name:"",
      jobtitle:"",
      email:"",
      address:"",
      number:"",
      birthdate:"",
      nationality:"",
      githublink:""
    })
  }


  return (
    <div>
      <h1>personal details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name : </label>
    <input type="text" className="form-control" name='name' onChange={handlechange}/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Job title : </label>
    <input type="text" className="form-control" name='jobtitle' onChange={handlechange}/>
   
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email : </label>
    <input type="email" className="form-control" name='email'  onChange={handlechange}/> 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Address : </label>
    <input type="email" className="form-control" name='address'  onChange={handlechange}/> 
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone Number : </label>
    <input type="number" className="form-control" name='number' onChange={handlechange}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Birth Date :</label>
    <input type="date" className="form-control" name='birthdate'  onChange={handlechange}/> 
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nationality :</label>
    <input type="text" className="form-control" name='nationality' onChange={handlechange}/> 
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Github Link :</label>
    <input type="text" className="form-control" name='githublink'  onChange={handlechange}/> 
  </div>


 
  <button className="btn btn-primary"  onClick={()=>handlesave()}>Save</button>
  </form>
    </div>
  )
}

export default PersonalDetails
