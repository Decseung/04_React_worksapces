function Box() {
  // 이벤트 핸들러 함수
  const handleMouseOver = () => {
    console.log("마우스 올림");
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={() => {
        console.log("마우스 내림");
      }}
    >
      마우스를 올려보세요
    </div>
  );
}

export default Box;
