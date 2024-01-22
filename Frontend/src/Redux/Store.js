import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { Reducers } from "./CombinedReducer";

const middlewares = [thunk];

// console.log(process.env.NODE_ENV, "lllk");

const setMiddlewares =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export const Store = createStore(Reducers, setMiddlewares);
