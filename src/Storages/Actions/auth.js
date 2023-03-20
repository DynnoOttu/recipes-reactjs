import axios from "axios";

export const loginUser = (data, navigate) => async (dispacth) => {
  try {
    dispacth({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.fullname);
    dispacth({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/profile");
  } catch (err) {
    console.log("login user error");
    console.log(err);
  }
};
