'use client'
import React, { useState, useMemo, useCallback } from "react";

// Simulate expensive calculation
const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += num;
  }
  return result;
};

// Child component (only re-renders if props change)
const Display = React.memo(({ value, onIncrement }) => {
  console.log("Display re-rendered");

  return (
    <div>
      <h2>Computed Value: {value}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoized expensive calculation
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // Memoized function reference
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleState = () => {
    setOtherState((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {count}</h1>

      <Display value={computedValue} onIncrement={handleIncrement} />

      <button onClick={toggleState}>
        Toggle unrelated state
      </button>
    </div>
  );
};

export default Counter;