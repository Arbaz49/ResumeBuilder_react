import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import {setalert} from "../Store and slices/AlertSlice";
import { useDispatch } from "react-redux";


const Login = ({handleClose}) => {
  const dispatch = useDispatch();

  // setAlert({
    // open: true,
    // message: "Please fill all the Fields",
    // type: "error",
  // });

  // const [alert,setalert]=useState({
  //   open:false,
  //   message:'',
  //   type:"success"
  // })

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const handleLogin =async () => {
    if(!password || !email){
      // alert("please enter data");
      dispatch(setalert({  open: true,
        message: "Please fill all the Fields",
        type: "error",}))
    } 
    try{
const result = await signInWithEmailAndPassword(auth,email,password);
dispatch(setalert({
  open: true,
  message: `Login Successful. Welcome ${result.user.email}`,
  type: "success",
}))
handleClose();
    }catch(error){
dispatch(setalert({
  open: true,
  message: error.message,
  type: "error",
}))
return;

    }
  };
  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <TextField
      type="email"
        id="outlined-basic"
        label="Email Id"
        variant="standard"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <TextField value={password} type="password" autoComplete="off" id="standard-basic" label="Password" variant="standard" onChange={(e)=>setpassword(e.target.value)} />
      <Button
        variant="filled"
        style={{ backgroundColor: "gold" }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
