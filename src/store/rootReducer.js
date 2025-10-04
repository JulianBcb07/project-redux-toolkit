import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
});
