import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes";

// initial state
const initialState = 0;
/* =============================================
Counter Reducer that takes the previous state and
action and return a new state as we increment or 
decrement and resets to the initial state
============================================== */

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};
export default counterReducer;
