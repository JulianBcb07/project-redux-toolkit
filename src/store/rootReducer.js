import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import producsReducer from "./productsSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
  products: producsReducer,
});
