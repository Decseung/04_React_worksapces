import React from "react";
import { useSearchParams } from "react-router-dom";

function Info() {
  const [searchParams] = useSearchParams(); // [URLSearchParmas객체, 쿼리스트링 수정 가능한 함수] 형태로 반환

  const name = searchParams.get("name") || "Guest";
  const age = searchParams.get("age") || 0;
  return (
    <div>
      <h5>Info 페이지</h5>
      <p>
        Welcome {name}!
        <br />
        {age > 0 && `You are ${age} years old`}
      </p>
    </div>
  );
}

export default Info;
