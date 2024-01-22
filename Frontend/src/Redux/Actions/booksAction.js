import {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
  //   CREATE_BOOK_RESET,
  //
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
} from "../Constants";

import { toast } from "react-toastify";

import axios from "axios";

console.log(process.env.NODE_ENV, "lllk22");

const backend_base_url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:9000";

export const createBookAction = (BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_BOOK_REQUEST,
    });
    // make the call
    const { data } = await axios.post(`${backend_base_url}/books`, {
      ...BodyData,
    });
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: CREATE_BOOK_SUCCESS,
      payload: data.data,
    });
    toast.success("Sign up complete. please proceed to sign in.");
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: CREATE_BOOK_ERROR,
      payload: message,
    });
    toast.error(message);
  }
};

export const getBooksAction = () => async (dispatch, state) => {
  try {
    dispatch({
      type: GET_BOOKS_REQUEST,
    });

    const { data } = await axios.get(`${backend_base_url}/books`);
    const payload = data;
    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: payload.data,
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
      type: GET_BOOKS_ERROR,
      payload: message,
    });
  }
};
