import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import {useSelector,useDispatch} from "react-redux";
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import {setalert} from "../Store and slices/AlertSlice";




function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }



  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p:1,
};

export default function Auth() {
  const getuser=useSelector((state)=>state.UserSlice);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value,setValue]=useState(0);
  // const handlechange=(event,newValue)=>{
  //   setValue(newValue);
  // }

//   const [value, setValue] = React.useState(0);
const handlesignout=()=>{
signOut(auth);

dispatch(setalert({ open: true ,
message:"Sign Out Successfull",
type:"success",
}));


}

  const handletabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {getuser.user?<Button onClick={handlesignout} variant="contained" style={{width:100,
    height:40,
    marginLeft:15,backgroundColor:"green"}}>Log Out</Button>:
      <Button onClick={handleOpen} variant="contained" style={{width:85,
    height:40,
    marginLeft:15,backgroundColor:"green"}}>Login</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handletabChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} style={{color:"black"}}/>
          <Tab label="Sign Up" {...a11yProps(1)} style={{color:"black"}} />
         
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Login
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sign up
      </TabPanel> */}
      {value=== 0 && <Login handleClose={handleClose} />}
      {value=== 1 && <Signup handleClose={handleClose}  />}

      
    </Box>
        </Box>
      </Modal>
    </div>
  );
}