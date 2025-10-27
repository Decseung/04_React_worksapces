import React, { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("hong@example.com");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      이름 : <input type="text" value={name} onChange={handleName} />
      <br />
      나이 : <input type="number" value={age} onChange={handleAge} />
      <br />
      이메일 : <input type="email" value={email} onChange={handleEmail} />
      <h2>프로필</h2>
      <div>
        {name} ({age}세)
      </div>
      <div>{email}</div>
    </>
  );
}

export default UserInfo;
