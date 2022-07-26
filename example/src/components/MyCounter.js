import React, { useContext, useState } from "react";
import CounterContext from "../contexts/CounterContext";
// import CounterContext from '../contexts/CounterContext'

function MyCounter() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount( count + 1)
    }
    
    function decreaseCount() {
        setCount( count - 1)
    }
//   const { count, increaseCount, decreaseCount } = useContext(CounterContext);

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
    </div>
  );
}

export default MyCounter;
