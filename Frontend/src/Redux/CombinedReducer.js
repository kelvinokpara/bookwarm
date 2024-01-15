import { combineReducers } from "redux";
import {
  createUserReducer,
  loginUserReducer,
  getUserReducer,
  getUsersReducer,
  updateUserReducer,
  deleteUserReducer,
  CreateBookReducer,
  getBookReducer,
  getBooksReducer,
  deleteBookReducer,
  loginStatusReducer,
  SearchBooksReducer,
} from "./Reducers";

export const Reducers = combineReducers({
  createUser: createUserReducer,
  loginUser: loginUserReducer,
  getUser: getUserReducer,
  getUsers: getUsersReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  createBook: CreateBookReducer,
  getBook: getBookReducer,
  getBooks: getBooksReducer,
  deleteBook: deleteBookReducer,
  loginStatus: loginStatusReducer,
  searchBooks: SearchBooksReducer,
});
