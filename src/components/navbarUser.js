import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
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
    <div className="container">
      <section className="justify-content-center align-items-center">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid">
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
                  <a className="nav-link active" href={"/register"}>
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/login"}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/search-menu"}>
                    Search menu
                  </a>
                </li>
              </ul>
              <div
                className="image-profile d-flex"
                style={{ marginRight: "70p" }}
              >
                <div className="line-left"></div>
                <img src="" alt="" width="64px" height="64px" />
                <ul
                  style={{
                    listStyle: "none",
                    marginLeft: "-10px",
                    marginTop: "4px",
                  }}
                >
                  <li>
                    <a href={"/profile"}>{name ? name : "Profile"}</a>
                    <br />
                    {name && (
                      <a href="" onClick={() => logout()}>
                        logout
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavbarUser;
