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
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  //
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  // ,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  //
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_RESET,
  LOGGED,
  UNLOGGED,
} from "../Constants";

const userLocalInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const loginUserReducer = (
  state = {
    user: userLocalInfo,
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        success: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        user: null,
        success: false,
        error: action.payload,
      };
    case LOGIN_USER_RESET:
      return {
        ...state,
        user: null,
        success: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const createUserReducer = (
  state = {
    user: null,
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        success: true,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case CREATE_USER_RESET:
      return {
        user: null,
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getUsersReducer = (
  state = {
    user: [],
    loading: false,
    success: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return { ...state, user: action.payload, success: true, loading: false };
    case GET_USERS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, success: true, loading: false };
    case GET_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const deleteUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return { ...state, user: action.payload, success: false, loading: true };
    case DELETE_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const updateUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload, success: true, loading: false };
    case UPDATE_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    case UPDATE_USER_RESET:
      return {
        ...state,
        user: null,
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

export const loginStatusReducer = (state = { status: null }, action) => {
  switch (action.type) {
    case LOGGED:
      return { status: true };
    case UNLOGGED:
      return { status: false };
    default:
      return state;
  }
};
