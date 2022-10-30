import { combineReducers } from "redux";
import { billReducer } from "../reducers/Reducers";
import { configureStore } from '@reduxjs/toolkit'
const reducers = combineReducers({
  bills: billReducer,
});
const initialState = {};
const store = configureStore({reducer:reducers}, initialState);

export default store;