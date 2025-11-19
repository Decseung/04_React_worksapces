import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState(["운동하기", "useState 만들기"]);
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  };

  return (
    <>
      <input type="text" value={inputText} onChange={handleTextChange} />
      <button onClick={handleAddTodo}>추가</button>
      <br />
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <input type="checkbox" />
            {item}
            <button>삭제</button>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default Todos;
