import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pushlanguage } from "../Store and slices/languageSlice";

const Language = () => {
  const [add, setadd] = useState([]);
  const [language, setlanguage] = useState({
    language: "",
  });
  const handlechange = (e) => {
    setlanguage({  [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(pushlanguage(language));
    // setlanguage({language:""});
  };

  const handleadd = () => {
    const ele = 
      <div className="form-floating">
        <input
          className="form-control"
          placeholder="Leave a comment here"
          name="language"
          onChange={handlechange}
        ></input>
        <label htmlFor="floatingTextarea">Add Language</label>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
          onClick={() => handleclick()}
        >
          Save
        </button>
      </div>
    ;
    setadd([...add, ele]);
  };

  return (
    <div>
      <h1>Languages</h1>
      {/* <div className="form-floating">
        <input
          className="form-control"
          placeholder="Leave a comment here"
          name="language"
          onChange={handlechange}
        ></input>
        <label htmlFor="floatingTextarea">Add Language</label>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
          onClick={() => handleclick()}
        >
          Save
        </button>
      </div> */}

      {add.map((ele,id) => <div key={id}>{ele}</div>)}
      <button
        onClick={handleadd}
        type="submit"
        className="btn btn-primary my-3"
      >
        Add More
      </button>
    </div>
  );
};

export default Language;
