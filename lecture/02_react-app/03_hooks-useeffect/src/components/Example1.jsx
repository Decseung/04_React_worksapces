import React, { useEffect, useState } from "react";

function Example1() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // 의존성 배열이 없는 경우 => Mount와 Update // 즉 렌더링 시 동작한다.
  useEffect(() => {
    console.log("Example1 컴포넌트 렌더링");
  });
  // setup 함수가 동작되는 시점
  // 1. 처음 컴포넌트가 렌더링 될때(Mount, componentDidMount)
  // 2. 다시 렌더링 될때(Update, componentDidUpdate)

  const handleTimeClick = (e) => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <button onClick={handleTimeClick}>Now</button>
      <h2>현재 시간: {time}</h2>
    </div>
  );
}

export default Example1;
