import React, { useState } from 'react'
import AboutComponent from '../Components/AboutComponent';
import Education from '../Components/Education';
import InterestC from '../Components/InterestC';
import Language from '../Components/Language';
// import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import PersonalDetails from '../Components/PersonalDetails';
import ProjectC from '../Components/ProjectC';
import WorkExpC from '../Components/WorkExpC';
import "./Resumepage.css";
import { useNavigate } from "react-router-dom";


const ResumePage = () => {
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate("/resumedownload");
  }
    const [personal,setpersonal]=useState(false);
    const [about,setabout]=useState(false);
    const [education,setducation]=useState(false);
    const [work,setwork]=useState(false);
    const [interest,setinterest]=useState(false);
    const [project,setproject]=useState(false);
    const [language,setlanguage]=useState(false);

    const getpersonal=()=>{
        setpersonal(!personal);
    }
    const getabout=()=>{
        setabout(!about);
    }
  return (
    <div>
        <Navbar/>
      <nav className="resumenavcontainer">
        <div className="btncontainer" style={{position:"sticky"}}>
            <button className='rbuttons' onClick={getpersonal}>personal details</button>
            <button className='rbuttons' onClick={getabout}>About</button>
            <button className='rbuttons' onClick={()=>setducation(!education)}>Education</button>


            <button className='rbuttons' onClick={()=>setwork(!work)}>Work Experience</button>
            <button className='rbuttons' onClick={()=>setinterest(!interest)}>Interest</button>
            {/* <button className='rbuttons' onClick={()=>setproject(!project)} >Projects</button> */}
            <button className='rbuttons' onClick={()=>setlanguage(!language)}>Languages</button>
            <button className='rbuttons' style={{backgroundColor:"red",color:"white"}} onClick={handleclick}>Preview</button>
        </div>
        <div className="inputcontainer">
            {personal?<PersonalDetails remove={personal}/>:''}
            {about?<AboutComponent/>:''}
            {education?<Education/>:''}
            {work?<WorkExpC/>:''}
            {interest?<InterestC/>:''}
            {project?<ProjectC/>:''}
            {language?<Language/>:''}
        
        </div>
        <button className='rbuttons' style={{backgroundColor:"red",color:"white",marginLeft:"600px"}} onClick={handleclick} >Preview</button>

      </nav>
    </div>
  )
}

export default ResumePage
