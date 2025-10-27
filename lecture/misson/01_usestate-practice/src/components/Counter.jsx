import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>카운트 : {count}</div>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={handleIncrease}>+1</button>
    </>
  );
}

export default Counter;
