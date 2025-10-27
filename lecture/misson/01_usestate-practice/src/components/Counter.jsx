import React, { useState } from "react";

function counter() {
  const [counter, setCounter] = useState(0);

  handleDecrease = () => {
    setCounter((prev) => {
      prev - 1;
    });
  };

  handleIncrease = () => {
    setCounter(counter + 1);
  };

  handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div>카운트 :</div>
      <button>-1</button>
      <button>초기화</button>
      <button>+1</button>
    </>
  );
}

export default counter;
