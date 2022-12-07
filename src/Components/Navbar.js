import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className="leftnavvontainer">
            <h1>ResumeBuilder</h1>

        </div>
        <div className="rightnavcontainer">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>HOME</Link></li>
            <li>About</li>
            <li>
            <Link to="/resumedownload" style={{textDecoration:"none",color:"black"}}>Resume</Link></li>
            <Auth/>
        </ul>        
        </div>
      
    </div>
  )
}

export default Navbar
