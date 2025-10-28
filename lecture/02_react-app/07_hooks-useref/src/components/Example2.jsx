import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

// dom 요소 직접 접근하는 사용 예시

function Example2() {
  const inputRef = useRef(); // {current: undefined}

  // 컴포넌트 렌더링 시 해당 텍스트 상자에 focusing 효과 주기
  // 1) useRef === {current : undefined}
  // 2) input에 직접 ref 속성 넣어주면 useRef === {current: input DOM 요소 객체}

  useEffect(() => {
    // 3) input DOM요소객체에 직접 접근해서 focus 속성 활성화
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default Example2;
