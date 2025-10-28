import React from "react";
import { useState } from "react";

function BeforeUseMemo() {
  console.log("리렌더링"); // 렌더링이 되는 시점: 최초에 한번, state 또는 props 변경시

  const [num1, setNum1] = useState(0);

  const operation1 = () => {
    console.log("오퍼레이션원 가동!");
    for (let i = 0; i < 3000000000; i++) {}
    return num1 + 1; // 시간이 오래 걸리는 연산
  };
  const result1 = operation1();

  const [num2, setNum2] = useState(0);

  const operation2 = () => {
    console.log("오퍼레이션2 가동!");

    return num2 + 1;
  };

  const result2 = operation2();
  return (
    <>
      <h2>오버헤드 연산</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <div>
        {num1} + 1 = {result1}
      </div>

      <h2>일반 연산</h2>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div>
        {num2} + 1 = {result2}
      </div>
    </>
  );
}

export default BeforeUseMemo;
