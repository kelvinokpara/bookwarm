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

const initState = {
  library: [],
  loading: false,
  success: false,
  error: null,
};

export const createLibraryReducer = (
  state = {
    createLibrary: {},
    loading: false,
    success: false,
    createError: null,
  },
  action
) => {
  switch (action.type) {
    case CREATE_LIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LIBRARY_SUCCESS:
      return {
        ...state,
        createLibrary: action.payload,
        loading: false,
        success: true,
      };
    case CREATE_LIBRARY_ERROR:
      return {
        ...state,
        loading: false,
        createError: action.payload,
      };
    default:
      return state;
  }
};

export const getLibraryReducer = (
  state = {
    getLibrary: {},
    loading: false,
    success: false,
    getError: null,
  },
  action
) => {
  switch (action.type) {
    case GET_LIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIBRARY_SUCCESS:
      return {
        ...state,
        getLibrary: action.payload,
        loading: false,
        success: true,
      };
    case GET_LIBRARY_ERROR:
      return {
        ...state,
        loading: false,
        getError: action.payload,
      };
    default:
      return state;
  }
};

export const incrementLibraryReducer = (
  state = {
    incLibrary: {},
    loading: false,
    success: false,
    incError: null,
  },
  action
) => {
  switch (action.type) {
    case INCREMENT_LIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INCREMENT_LIBRARY_SUCCESS:
      return {
        ...state,
        incLibrary: action.payload,
        loading: false,
        success: true,
      };
    case INCREMENT_LIBRARY_ERROR:
      return {
        ...state,
        loading: false,
        incError: action.payload,
      };
    case INCREMENT_LIBRARY_RESET:
      return state;
    default:
      return state;
  }
};

export const decrementLibraryReducer = (
  state = {
    decLibrary: {},
    loading: false,
    success: false,
    decError: null,
  },
  action
) => {
  switch (action.type) {
    case DECREMENT_LIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DECREMENT_LIBRARY_SUCCESS:
      return {
        ...state,
        decLibrary: action.payload,
        loading: false,
        success: true,
      };
    case DECREMENT_LIBRARY_ERROR:
      return {
        ...state,
        loading: false,
        decError: action.payload,
      };
    case DECREMENT_LIBRARY_RESET:
      return state;
    default:
      return state;
  }
};
