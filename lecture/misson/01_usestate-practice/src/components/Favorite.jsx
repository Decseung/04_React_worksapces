import React, { useState } from "react";

function Favorite() {
  const [colors, setColors] = useState("blue");
  const [fruits, setFruits] = useState("apple");

  const handleColors = (e) => {
    setColors(e.target.value);
  };

  const handleFruits = (e) => {
    setFruits(e.target.value);
  };
  return (
    <>
      <select value={colors} onChange={handleColors}>
        <option value="blue">파란색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>
      <br />
      <select value={fruits} onChange={handleFruits}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="orange">오렌지</option>
      </select>
      <div>선택한 색상: {colors}</div>
      <br />
      <div>선택한 과일: {fruits}</div>
    </>
  );
}

export default Favorite;
