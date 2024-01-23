import { combineReducers } from "redux";
import {
  // user reducers
  createUserReducer,
  loginUserReducer,
  getUserReducer,
  getUsersReducer,
  updateUserReducer,
  deleteUserReducer,
  // book reducers
  CreateBookReducer,
  getBookReducer,
  getBooksReducer,
  deleteBookReducer,
  // login status reducer
  loginStatusReducer,
  // book search reducer
  SearchBooksReducer,
  // library reducers
  createLibraryReducer,
  getLibraryReducer,
  incrementLibraryReducer,
  decrementLibraryReducer,
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
  createLib: createLibraryReducer,
  getLib: getLibraryReducer,
  incrementLib: incrementLibraryReducer,
  decrementLib: decrementLibraryReducer,
});
