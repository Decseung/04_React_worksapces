import React, { useState } from "react";

function Example6() {
  const [inputValue, setInputValue] = useState("");
  const [animals, setAnimals] = useState([]);

  // 상태관리
  // 1. 사용자 입력값
  // 2. 동물 목록 데이터

  const handleAddAnimal = (e) => {
    if (e.key === "Enter") {
      // 사용자 입력값 => animals 배열 추가(animals 상태 변수 업데이트)
      // animals.push(inputValue) // 상태 변수 직접 수정 => React 변경 감지 x
      setAnimals([...animals, inputValue]);
      // 기존 animals 배열 요소 전부
      // 새로 입력된 동물값
      setInputValue(""); // 입력값 초기화
    }
  };

  const handleClickButton = () => {
    setAnimals([...animals, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h2>배열활용</h2>
      <input
        type="text"
        placeholder="추가할 동물 입력"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleAddAnimal}
      />
      <button onClick={handleClickButton}>추가</button>

      <h5>현재 추가된 동물 목록</h5>
      <ul>
        {animals.map((animal, idx) => {
          return <li key={idx}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

export default Example6;
