import { React, useEffect, useState } from "react";
import profile from "../../assets/assets/img/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile, editProfile } from "../../Storages/Actions/profileUsers";

export default function Profile() {

  const [updateData, setUpdateData] = useState({
    fullname: ""
  });

  const [photo, setPhoto] = useState();
  const [currentPhoto, setCurrentPhoto] = useState(null);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user_photo = localStorage.getItem('photo')
  const name = localStorage.getItem('name')


  useEffect(() => {
    dispatch(getProfile(navigate));

  }, []);

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
    window.URL.revokeObjectURL(currentPhoto);
    setCurrentPhoto(window.URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", updateData.fullname);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(editProfile(formData, navigate));
  };


  return (
    <>
      <body>
        <div className="">
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
                      <a className="nav-link active" href={"/home"}>
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={"/add-menu"}>
                        Add recipe
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={"/search-menu"}>
                        Search menu
                      </a>
                    </li>
                  </ul>
                  <div className="image-profile d-flex">
                    <div className="line-left"></div>
                    <img
                      src={profile}
                      alt=""
                      width="64px"
                      height="64px"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
        <div className="">
          <section className="justify-content-center align-items-center">
            <div className="wrapper">
              <span className="border-left"></span>
              <div
                className="image-circle-wrappper"
                style={{ textAlign: "center" }}
              >
                <img src="assets/img/profile.jpg" alt="" width="200px" />
              </div>
            </div>
            <div className="change-picture" style={{ marginLeft: '-90px' }}>
              <p>Update Your Profile</p>
            </div>
            <div className="container">
              <div className="row justify-content-center align-items-center inner-row">
                <div className="col-lg-5 col-md-7">
                  <div className="form-box">
                    <form className="form-login" onSubmit={updateProfile}>
                      <div className="col-lg-12 col-md-6 mt-5 mb-5 text-center">
                        <img src={currentPhoto || user_photo} alt="" className="rounded-circle" style={{ maxWidth: "250px" }} />
                      </div>
                      <input style={{ marginLeft: '109px' }} type="file" required onChange={handlePhoto} />
                      <div className="mb-2">
                        <label
                          htmlFor="disabledTextInput"
                          className="form-label"
                          placeholder={name}
                        >Fullname</label>
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          style={{ fontFamily: "Poppins", color: "#696F79" }}
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="disabledTextInput" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="disabledTextInput"
                          className="form-control"
                          style={{ fontFamily: "Poppins", color: "#696F79" }}
                        />
                      </div>
                      <a
                        type="submit"
                        className="btn button-input"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        style={{ paddingTop: "18px" }}
                      >
                        Update Profile
                      </a>
                      <p className="link-update-profile">
                        Change Password? Click Here{" "}
                        <span>
                          <a href="">click here</a>
                        </span>
                      </p>
                      <div className="already">
                        <p>
                          Don't have a account <span>Sign Up</span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="modal modal-logout" id="myModal">
          <div className="modal-dialog modal-lg modal-sm">
            <div className="modal-content rounded-0">
              <div
                className="modal-header"
                style={{
                  borderBottom: "0",
                  justifyContent: "center",
                  marginBottom: "90px",
                }}
              >
                <h4>You want to logout?</h4>
              </div>

              <div
                className="modal-footer button-oke"
                style={{
                  marginTop: "100px",
                  borderTop: "0",
                  justifyContent: "center",
                }}
              >
                <button type="button" className="btn" data-bs-dismiss="modal">
                  Oke
                </button>
              </div>

              <div
                className="modal-footer button-yes"
                style={{
                  marginTop: "28px",
                  borderTop: "0",
                  justifyContent: "center",
                }}
              >
                <button type="button" className="btn" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
