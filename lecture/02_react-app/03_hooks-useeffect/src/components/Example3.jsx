import React, { useEffect, useState } from "react";

// 의존성 배열에 특정 값을 지정해 놓는 경우
function Example3() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  useEffect(() => {
    console.log("Example3 리렌더링");
  }, [date.year, date.month]);

  const handleDateChange = (e) => {
    setDate({
      ...date,
      [e.target.id]: e.target.value, // 현재 change 된 입력값만 변경
    });
  };
  // setUp 함수 동작 시점
  // 1. 최초 렌더링시 Mount
  // 2. 의존성 배열에 지장된 값 변화시

  return (
    <div>
      <input
        type="text"
        placeholder="년도"
        id="year"
        value={date.year}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="월"
        id="month"
        value={date.month}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="일"
        id="day"
        value={date.day}
        onChange={handleDateChange}
      />
      <h2>
        입력 날짜 : {date.year}년 {date.month}월 {date.day}일
      </h2>
    </div>
  );
}

export default Example3;
