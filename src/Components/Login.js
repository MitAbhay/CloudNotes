import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const host ="https://cloudnotesbackend.herokuapp.com";
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleonsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/SignIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {   // checking succeses--if true then login the user
      //render to notes and save AuthToken
      localStorage.setItem('token', json.AuthToken);
      history.push("/home");
    } else {
      alert("Enter correct Credentials");
    }
  };

  const handleonchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="text-light mx-auto " style=
    {{width: "500px"}}>
        <h2 className="text-center my-5" style={{color:'#0d6efd', fontFamily: 'cursive'}}>LOGIN HERE</h2>
        <form onSubmit={handleonsubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={Credentials.email}
              onChange={handleonchange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={Credentials.password}
              onChange={handleonchange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            LogIn
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
