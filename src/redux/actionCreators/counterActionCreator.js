import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../actions/counterAction";

/* ===========================================
Counter action creator that returns the action 
object
============================================== */

export const incrementActionCreator = () => {
  return incrementAction;
};

export const decrementActionCreator = () => {
  return decrementAction;
};

export const resetActionCreator = () => {
  return resetAction;
};
