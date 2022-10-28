import { combineReducers, createStore} from "redux";
import { billReducer } from "../reducers/Reducers";

const reducer = combineReducers({
  bills: billReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;