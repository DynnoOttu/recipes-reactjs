import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  // const user = useSelector((state)=>state.user.data)
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  // useEffect(()=>{
  //   console.log(user)
  // },[user])

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {name ? '' : <a className="nav-link" href={"/register"}>
                Register
              </a>}
            </li>
            <li className="nav-item">
              {name ? '' : <a className="nav-link" href={"/login"}>
                Login
              </a>}
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/search-menu"}>
                Search menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/add-menu"}>
                Add Menu
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile"}>
                {name ? name : ""}
              </Link>
            </li>
          </ul>
          <ul>
            <li
              className="nav-item"
              style={{ listStyleType: "none", textDecoration: "none" }}
            >
              {name && (
                <button className="btn btn-warning" onClick={() => logout()}>
                  logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
