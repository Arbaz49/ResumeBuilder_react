import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
// import {getdata} from "../Store and slices/PersonalDSlice";

const ResumeDownloadPage = () => {
  const componentRef = useRef();
  const getinfo = useSelector((state) => state.PersonalInfo);
  const about = useSelector((state) => state.about);

  const work = useSelector((state) => state.work);
  const edu = useSelector((state) => state.education);
  const interest = useSelector((state) => state.interest);
  const language = useSelector((state) => state.language);
  return (
    <div className="resumepage">
      <Typography variant="h3" style={{ textAlign: "center" }}>PREVIEW OF RESUME</Typography>
      <ReactToPrint
        trigger={() => <Button variant="filled" style={{float:"right",marginRight:"50px",backgroundColor:"rgb(10 25 41)",color:"white"}}>Download / Print</Button>}
        content={() => componentRef.current}
      />
      <div style={{ width: "60%", margin: "auto" }}>
        <div style={{ width: "100%" }} ref={componentRef}>
          <div className="resumeContainer">
            <div className="toppart">
              <div className="resumeleft">
                <h1 className="name">
                  {/* {getinfo[0].name?getinfo[0].name:<span>Name</span>} */}
                  {getinfo[0] &&<span>{getinfo[0].name}</span>}

                </h1>

                <h2 style={{ textAlign: "left"}}>
                  {getinfo[0]&&getinfo[0].jobtitle}
                </h2>
              </div>
              <div className="resumeright">
                <p>
                  {getinfo[0]&& getinfo[0].address}
                </p>
                <p><a href="jhbhs">
                  
                  {getinfo[0]&& 
                    getinfo[0].email
                  }
                </a></p>
                <p><a href="jbshb">
                  {getinfo[0]&&getinfo[0].githublink}
                </a></p>
                <p>
                  +91{" "}
                  {getinfo[0]&&getinfo[0].number
                  }
                </p>
              </div>
            </div>
            <div className="description">
              <span>
                <b>Summary :</b>
              </span>
              <p>{about[0] && <span>{about[0].about}</span>}

              </p>
            </div>
            <div className="infoContainer">
              <div className="leftinfo">
                <span
                  style={{
                    marginTop: "20px",
                    color: "orange",
                    fontSize: "20px",
                    lineHeight: "20px",
                    borderBottom: "1px solid black",
                  }}
                >
                  Work Experience
                </span>
                {work.map((ele) => {
                  return (
                    <div>
                      <span>
                        <b>{ele.profile}</b>
                      </span>
                      <li>{ele.work_info}</li>
                      <li>hbajsa</li>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="edu">
              <span
                style={{ fontSize: "20px", borderBottom: "2px solid black" }}
              >
                <b>Education</b>
              </span>
              <br />
              {edu.map((ele) => {
                return <span>{ele.education}, </span>;
              })}
            </div>
            <div className="intersest-language">
              <div className="interest">
                <span style={{ borderBottom: "1px solid black" }}>
                  <b>Interset</b>
                </span>{" "}
                <br />
                {interest.map((ele) => {
                  return <span style={{marginLeft:"20px"}}>{ele.interest}</span>;
                })}
              </div>
              <div className="language">
                <span
                  style={{ width: "100%", borderBottom: "1px solid black" }}
                >
                  <b>Languages</b>
                </span>
                <br />
                {language.map((ele,id) => {
                  return <span key={id} style={{marginLeft:"10px"}}>{ele.language}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownloadPage;
