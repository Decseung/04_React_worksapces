import React, { useState } from "react";

function Example5() {
  const [user, setUser] = useState({
    id: "",
    pwd: "",
  });
  /*
  const handleUserIdChange = (e) => {
    // 기존의 pwd는 그대로 유지
    // id만 변경
    setUser({ ...user, id: e.target.value }); // 기존 user 객체가 가진 값을 분해하고
    // id 새로운 값으로 덮어씌움.
  };

  const handleUserPwChange = (e) => {
    setUser({ ...user, pwd: e.target.value });
  };
  */

  // 위의 두개의 이벤트 핸들러 함수를 통합
  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value, // 현재 이벤트가 발생된 입력상자의 입력값만 덮어씌우기
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!user.id.trim() || !user.pwd.trim()) {
      alert("돌아가");
      return;
    }
    alert(
      `유효성검사 통과! 로그인 제출 진행! 아이디:${user.id}, 비밀번호:${user.pwd}}`
    );
  };

  return (
    <>
      <h2>종합 예시 - 로그인 폼 (사용자 입력값을 각 개별 state변수 관리)</h2>
      <form action="" method="POST" onSubmit={handleLoginSubmit}>
        <label>
          <input
            name="id"
            type="text"
            placeholder="아이디 입력"
            value={user.id}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            name="pwd"
            type="password"
            placeholder="비밀번호 입력"
            value={user.pwd}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">가입하기</button>
      </form>
    </>
  );
}

export default Example5;
