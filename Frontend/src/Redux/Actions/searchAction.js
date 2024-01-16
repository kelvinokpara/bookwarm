import {
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_ERROR,
  SEARCH_BOOKS_RESET,
} from "../Constants/searchConstant";

import axios from "axios";

const backend_base_url = "http://localhost:9000";

export const searchBooksAction = (BodyData) => async (dispatch, state) => {
  try {
    dispatch({ type: SEARCH_BOOKS_REQUEST });
    const { data } = await axios.get(
      `${backend_base_url}/search?key=${BodyData}`
    );
    const payload = data;
    console.log(payload.data, "search data");
    dispatch({
      type: SEARCH_BOOKS_SUCCESS,
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
      type: SEARCH_BOOKS_ERROR,
      payload: message,
    });
  }
};
