import React from "react";
import logo from "../image.svg";
import { useNavigate } from "react-router-dom";

const Scetion = () => {
  const navigate = useNavigate();
    const handleclick=()=>{
      navigate("/resumepage");
    }
  return (

    <>
    <div className="sectionContainer">
      <div className="leftsectionitem">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cumque exercitationem repellat laborum odit, excepturi animi et temporibus incidunt. Labore fugit perferendis aspernatur accusamus ipsam vero voluptates ex quasi.</p>
      </div>
      <div className="rigthsectionitem">
        <img src={logo} alt="svgicon" className="svgicon" />
      </div>
    </div>
    <div className="btncontaine" style={{width:"500px",display:"inline-block",margin:"auto"}}>
    <button className="startbutton" onClick={handleclick}>Start</button>

    </div>
   </>
  );
};

export default Scetion;
