import { PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  decrement,
  addNumber,
} from "./features/counter/counter-slice";
import { Dogs, fetchDogs } from "./features/dogs/dogsSlice";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    if (value > 0) {
      dispatch(decrement());
    }
  }

  function handleAddAmount() {
    dispatch(addNumber(5));
  }

  const { dogs, error } = useAppSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleAddAmount}>+5</button>
      {JSON.stringify(dogs)}
    </div>
  );
}

export default App;
