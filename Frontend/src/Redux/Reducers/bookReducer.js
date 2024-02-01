import {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
  CREATE_BOOK_RESET,
  // ,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  // ,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  // ,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_RESET,
} from "../Constants";

export const CreateBookReducer = (
  state = { book: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        book: action.payload,
      };
    case CREATE_BOOK_RESET:
      return {
        loading: false,
        success: false,
        book: null,
        error: null,
      };
    case CREATE_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getBooksReducer = (
  state = { Books: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, Books: action.payload, success: true, loading: false };
    case GET_BOOKS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getBookReducer = (
  state = { book: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return { ...state, loading: true };
    case GET_BOOK_SUCCESS:
      return { ...state, book: action.payload, success: true, loading: false };
    case GET_BOOK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const deleteBookReducer = (
  state = { book: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_BOOK_REQUEST:
      return { ...state, loading: true };
    case DELETE_BOOK_SUCCESS:
      return { ...state, book: action.payload, success: false, loading: true };
    case DELETE_BOOK_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
