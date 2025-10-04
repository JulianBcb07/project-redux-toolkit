import { combineReducers } from "@reduxjs/toolkit";

let userReducer = {};

export const rootReducer = combineReducers({
  user: userReducer,
});
