import React, { useState } from "react";

function Example3() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <h2>셀렉트박스와 state</h2>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="" hidden>
          통신사 선택
        </option>
        <option>SKT</option>
        <option>LGU+</option>
        <option>KT</option>
      </select>
      <h5>선택값 : {selectedValue || "선택된 값 없음"}</h5>
    </>
  );
}

export default Example3;
