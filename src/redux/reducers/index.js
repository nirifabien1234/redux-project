import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;
