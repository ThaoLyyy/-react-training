import React, { useContext } from "react";
import CounterContext, { useCounter } from "../contexts/CounterContext";



function ComponentTwo() {
  const { increaseCount } = useCounter();
  return (
    <div style={{ backgroundColor: "red" }}>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default ComponentTwo;
