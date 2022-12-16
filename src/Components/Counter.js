import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "../feature/Counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count)
  const dispatch = useDispatch();

  
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h4>{count}</h4>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
