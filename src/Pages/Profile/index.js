import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavbarUser from "../../components/navbarUser";

export default function Profile() {
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <body>
        <NavbarUser />
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
            <div className="change-picture">
              <p>Change Profile picture</p>
            </div>
            <div className="container">
              <div className="row justify-content-center align-items-center inner-row">
                <div className="col-lg-5 col-md-7">
                  <div className="form-box">
                    <form className="form-login">
                      <div className="mb-2">
                        <label
                          for="disabledTextInput"
                          className="form-label"
                        ></label>
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          style={{ fontFamily: "Poppins", color: "#696F79" }}
                          value={user.fullname}
                        />
                      </div>
                      <div className="mb-2">
                        <label for="disabledTextInput" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="disabledTextInput"
                          className="form-control"
                          value={user.email}
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
