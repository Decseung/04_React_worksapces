import { useState } from "react";

function Example1() {
  const [message, setmessage] = useState("");

  const handleInput = (e) => {
    setmessage(e.target.value);
  };

  return (
    <>
      <h2>입력 상자와 state</h2>
      <input
        type="text"
        placeholder="메세지 입력하라"
        className="inputElement"
        value={message}
        onChange={handleInput}
      />
      <h5>실시간 입력 값: {message}</h5>
    </>
  );
}

export default Example1;
