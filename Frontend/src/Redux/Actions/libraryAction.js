import axios from "axios";
import { toast } from "react-toastify";
import {
  // create library constants
  CREATE_LIBRARY_REQUEST,
  CREATE_LIBRARY_SUCCESS,
  CREATE_LIBRARY_ERROR,
  // get library constants
  GET_LIBRARY_REQUEST,
  GET_LIBRARY_SUCCESS,
  GET_LIBRARY_ERROR,
  // increment library constants
  INCREMENT_LIBRARY_REQUEST,
  INCREMENT_LIBRARY_SUCCESS,
  INCREMENT_LIBRARY_ERROR,
  INCREMENT_LIBRARY_RESET,
  // decrement library constants
  DECREMENT_LIBRARY_REQUEST,
  DECREMENT_LIBRARY_SUCCESS,
  DECREMENT_LIBRARY_ERROR,
  DECREMENT_LIBRARY_RESET,
} from "../Constants";

console.log(process.env.NODE_ENV, "llkelw");

const backend_base_url = "http://localhost:9000";

const userJson = localStorage.getItem("userInfo");
const user = userJson ? JSON.parse(userJson) : null;

// console.log(user);

export const createLibraryAction = () => async (dispatch, state) => {
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    dispatch({
      type: CREATE_LIBRARY_REQUEST,
    });
    const { data } = await axios.post(
      `${backend_base_url}/libraries/${user._id}`,
      {},
      config
    );

    dispatch({
      type: CREATE_LIBRARY_SUCCESS,
      payload: data.data,
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
      type: CREATE_LIBRARY_ERROR,
      payload: message,
    });
    toast.error(`ERROR:${message}`);
  }
};

export const getUserLibraryAction = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_LIBRARY_REQUEST });
    const { data } = await axios.get(
      `${backend_base_url}/libraries/${user._id}`
    );
    dispatch({ type: GET_LIBRARY_SUCCESS, payload: data });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: GET_LIBRARY_ERROR,
      payload: message,
    });
    toast.error(`ERROR:${message}`);
  }
};

export const incrementLibrary = (BodyData) => async (dispatch, state) => {
  try {
    dispatch({ type: INCREMENT_LIBRARY_REQUEST });
    const { data } = await axios.post(
      `${backend_base_url}/libraries/inc/${user._id}`,
      { bookId: BodyData }
    );
    dispatch({ type: INCREMENT_LIBRARY_SUCCESS, payload: data.data });
    toast.success("Book successfully added to your library");
  } catch (error) {
    let message =
      error.response && error.response.data.data
        ? error.response.data.data
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(error, "error");
    dispatch({
      type: INCREMENT_LIBRARY_ERROR,
      payload: message,
    });
    toast.error(`ERROR:${message}`);
  }
};

export const decrementLibrary = (BodyData) => async (dispatch, state) => {
  try {
    dispatch({ type: DECREMENT_LIBRARY_REQUEST });
    const { data } = await axios.post(
      `${backend_base_url}/libraries/dec/${user._id}`,
      { bookId: BodyData }
    );
    dispatch({ type: DECREMENT_LIBRARY_SUCCESS, payload: data });
    toast.success("book successfully removed from library");
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: DECREMENT_LIBRARY_ERROR,
      payload: message,
    });
    toast.error(`ERROR:${message}`);
  }
};
