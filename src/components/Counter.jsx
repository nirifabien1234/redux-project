import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementActionCreator as increment,
  decrementActionCreator as decrement,
  resetActionCreator as reset,
} from "../redux/actionCreators/counterActionCreator";

/* ==========================
Counter Function Component
========================== */

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  // Handle click event functions

  const incrementHandleClick = () => {
    dispatch(increment());
  };
  const decrementHandleClick = () => {
    dispatch(decrement());
  };
  const resetHandleClick = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold py-4">Counter</h1>
      </div>
      <div className="flex justify-center pb-2">
        <h1 className="py-[3px] text-3xl">{counter}</h1>
      </div>
      <div className="flex justify-center pb-4">
        <div className="px-3">
          <button className="decBtn" onClick={decrementHandleClick}>
            Decrease
          </button>
        </div>
        <div className="px-3">
          <button className="resetBtn" onClick={resetHandleClick}>
            Reset
          </button>
        </div>
        <div className="px-3">
          <button className="incBtn" onClick={incrementHandleClick}>
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
