import { useState } from "react";

function Example2() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <h2>체크박스와 state</h2>
      <label
        htmlFor="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      >
        <input type="checkbox" id="checkbox" />
        체크박스
      </label>
      <h5>체크여부 : {isChecked ? "O" : "X"}</h5>
    </>
  );
}

export default Example2;
