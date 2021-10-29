import React,{useEffect} from "react";
import {
    Link,useLocation
  } from "react-router-dom";
import { useHistory } from "react-router";


export const Navbar = () => {

 const history =useHistory();

  let location = useLocation();
  useEffect(() => {
      console.log(location.pathname)
  }, [location]);

  const handlelogout=() => {
    localStorage.removeItem("token");
    history.push("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CloudNotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/home"?"active" :"" } `} aria-current="page" to="/home">
                  My Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active" :"" } `} to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/contact"?"active" :"" } `} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {!localStorage.getItem('token')?
          <form className="d-flex">
          <Link className="btn btn-primary mx-1" to="/Login" role="button">LogIn</Link>
          <Link className="btn btn-primary mx-1" to="/Signup" role="button">SignUp</Link>
          </form>: <button className="btn btn-primary mx-1" onClick={handlelogout}>Logout</button>
          }
        </div>
      </nav>
    </>
  );
};
