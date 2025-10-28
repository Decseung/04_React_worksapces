import React from "react";
import { useContext } from "react";
import { NameContext } from "./NameShareApp2";

function DisplayName2() {
  // NameContext 객체를 구독해서 해당 컴텍스트에 저장된 내용을 꺼내서 사용
  const { currentName } = useContext(NameContext); // Provider에서 제공하는 값을 반환한다.

  return <h2>현재 선택된 이름 : {currentName}</h2>;
}

export default DisplayName2;
