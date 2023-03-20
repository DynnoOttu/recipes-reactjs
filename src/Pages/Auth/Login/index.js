import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Storages/Actions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispacth = useDispatch();

  const postData = (e) => {
    e.preventDefault("");
    console.log(email);
    console.log(password);
    let data = { email, password };
    dispacth(loginUser(data, navigate));
  };

  return (
    <>
      <body className="justify-content-center align-items-center">
        <div className="recipe">
          <h2>Recipe...</h2>
          <h2 className="started">Welcome</h2>
          <p style={{ textAlign: "center" }}>Log in intro exting account</p>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center inner-row">
            <div className="col-lg-5 col-md-7">
              <div className="form-box">
                <form className="form-login" onSubmit={postData}>
                  <div className="mb-2">
                    <label for="disabledTextInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="mb-2">
                    <label for="disabledTextInput" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="disabledFieldsetCheck"
                      />
                      <label
                        className="form-check-label"
                        for="disabledFieldsetCheck"
                      >
                        I agree to treams & condition
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn button-input">
                    Login
                  </button>
                  <div className="already">
                    <p>
                      Don't have a account{" "}
                      <span>
                        <a href="register.html">Sign Up</a>{" "}
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
