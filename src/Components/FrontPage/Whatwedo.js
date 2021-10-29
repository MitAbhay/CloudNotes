import React from "react";
import { useHistory } from "react-router-dom";

const Whatwedo = () => {

  const history =useHistory();
  const handleoncreate= ()=>{
      if (localStorage.getItem('token')) {
        history.push("/home");   
      }
      else{
        history.push("/Signup");
      }
    
  }
  return (
    <div>
      <div className="text-light mt-4 text-center">
        <p className="" style={{ fontSize: "80px" }}>
          YOUR EVERY WORD
        </p>
        <p className="" style={{ fontSize: "70px" }}>
          IS SAFE WITH US
        </p>
        <p className="">
          Here you store any type of notes including secret passwords, all are
          safe here, its highly protected
        </p>
        <button onClick={handleoncreate} type="submit" className="btn btn-primary fs-3 mt-5">
          Create your Free Notebook right Now
        </button>
      </div>
    </div>
  );
};

export default Whatwedo;
