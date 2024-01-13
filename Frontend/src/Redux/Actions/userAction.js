import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_RESET,
  //
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
  //
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../Constants";

import { toast } from "react-toastify";

import axios from "axios";

const backend_base_url = "http://localhost:9000";
// console.log(config.backend_base_url, "config.backend_base_url");
// asynchronous process

export const loginUserAction = (BodyData) => async (dispatch, state) => {
  const user = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    // make the call

    const { data } = await axios.post(
      `${backend_base_url}/users/login`,
      {
        email: BodyData.email,
        password: BodyData.password,
      },
      config
    );

    //if we get here, then request is a success case
    const userInfo = { ...data.data, token: data.token };
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: userInfo,
    });
    console.log(userInfo);

    //persist user login detail in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    // toast.success("User logged in");
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: message,
    });
    toast.error(message);
  }
};

export const logoutUserAction = () => async (dispatch, state) => {
  console.log("logged out");
  dispatch({ type: LOGIN_USER_RESET });
  localStorage.setItem("userInfo", null);
  toast.success("logged out");
};

export const createUserAction = (BodyData) => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_USER_REQUEST,
    });
    // make the call
    const { data } = await axios.post(
      `${backend_base_url}/users`,
      {
        ...BodyData,
      },
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: CREATE_USER_ERROR,
      payload: message,
    });
    toast.error(message);
  }
};

// export const userLogStatus = (BodyData) => (dispatch, state) =>{

// }
