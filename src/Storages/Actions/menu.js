import axios from "axios";

export const addMenu = (data, headers, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_MENU_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/recipes`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_MENU_SUCCESS", payload });
    navigate("/detail-profile-liked");
  } catch (err) {
    dispatch({ type: "ADD_MENU_FAILED", payload: err.response.data.message });
    console.log("addMenu error");
    console.log(err);
  }
};

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`);
    const menu = result.data.data;
    dispatch({ type: "GET_MENU_SUCCESS", payload: menu });
  } catch (err) {
    dispatch({ type: "GET_MENU_FAILED", payload: err.response.data.message });
    console.log("getMenu error");
    console.log(err);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MENU_PENDING" });
    const result = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/recipes/${id}`
    );
    const menu = result.data;
    dispatch({ type: "DELETE_MENU_SUCCESS", payload: menu });
  } catch (err) {
    dispatch({
      type: "DELETE_MENU_FAILED",
      payload: err.response.data.message,
    });
    console.log("DELETEMenu error");
    console.log(err);
  }
};