import {
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_RESET,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_ERROR,
} from "../Constants/searchConstant";

export const SearchBooksReducer = (
  state = { result: [], loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        success: true,
      };
    case SEARCH_BOOKS_ERROR:
      return { ...state, eror: action.payload, loading: false };
    case SEARCH_BOOKS_RESET:
      return {
        ...state,
        result: [],
        success: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
