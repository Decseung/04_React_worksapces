import React, { useState, useEffect } from "react";

function Example4() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRuning] = useState(false);

  useEffect(() => {
    // setup 함수
    console.log("setup 함수 실행");

    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        // setSeconds(seconds + 1); // => setSeconds(0 + 1) 상태로 캡쳐되어 저장됌. => (클로저 캡처)
        setSeconds((prev) => prev + 1); // 클로저 캡처일 경우 함수형을 써야한다. // ??????? 그러면 클로저 캡처로 값이 저장되는건데 왜 prev는 함수처럼 작동하는가아?
      }, 1000);
    }

    //cleanup 함수 : 컴포넌트가 Unmount 또는 useEffect의 setUp 함수가 다시 실행되기 전
    return () => {
      console.log("cleanup 함수 실행");
      // 현재 생성된 타이머 정리
      clearInterval(intervalId);
    };
  }, [isRunning]);

  // 타이머 정리하지 않았을 때의 문제점
  // 1. 정지 상태(false)로 변경되도 현재 타이머가 멈추지 않음
  // 2. 다시 실행 상태(true)로 변경되면 타이머가 중복으로 실행
  // => 메모리 누수

  const handleReset = () => {
    setIsRuning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>타이머</h2>
      <h3>{seconds}</h3>
      <button onClick={() => setIsRuning(true)}>시작</button>
      <button onClick={() => setIsRuning(false)}>중지</button>
      <button onClick={handleReset}>초기화</button>
      <p>상태 : {isRunning ? "실행중" : "정지"} </p>
    </div>
  );
}

export default Example4;
