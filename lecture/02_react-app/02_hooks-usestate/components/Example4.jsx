import React, { useState } from "react";

function Example4() {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUserPwChange = (e) => {
    setUserPwd(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    // 사용자가 입력한 값을 가져와서 유효성 검사를 실행
    // 유효한 값이 아니면 제출 막기(기본이벤트 막기)
    // 유효한 값이면 알림창 사용자 입력값 출력
    e.preventDefault();
    if (!userId.trim() || !userPwd.trim()) {
      alert("돌아가");
      return;
    }
    alert(
      `유효성검사 통과! 로그인 제출 진행! 아이디:${userId}, 비밀번호:${userPwd}}`
    );
  };

  return (
    <>
      <h2>종합 예시 - 로그인 폼 (사용자 입력값을 각 개별 state변수 관리)</h2>
      <form action="" method="POST" onSubmit={handleLoginSubmit}>
        <label>
          <input
            type="text"
            placeholder="아이디 입력"
            value={userId}
            onChange={handleUserIdChange}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={userPwd}
            onChange={handleUserPwChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">가입하기</button>
      </form>
    </>
  );
}

export default Example4;
