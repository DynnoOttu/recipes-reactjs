import axios from "axios";

export const registerUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: "USER_REGISTER_PENDING" });
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data);
        const user = result.data.data;
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
        // navigate("/login");
    } catch (err) {
        console.log("registerUser error");
        console.log(err);
    }
};

