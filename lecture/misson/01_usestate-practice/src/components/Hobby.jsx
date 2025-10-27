import React, { useState } from "react";

function Hobby() {
  const [hobby, setHobby] = useState({
    reading: false,
    music: false,
    exercise: true,
    coding: false,
  });

  const handleHobby = (e) => {
    setHobby({
      ...hobby,
      [e.target.id]: !e.target.checked,
    });
  };

  return (
    <>
      <label htmlFor="reading" onChange={handleHobby}>
        <input type="checkbox" id="reading" checked={hobby.reading} />
        독서
      </label>
      <br />
      <label htmlFor="music" onChange={handleHobby}>
        <input type="checkbox" id="music" checked={hobby.music} />
        음악
      </label>
      <br />
      <label htmlFor="exercise" onChange={handleHobby}>
        <input type="checkbox" id="exercise" checked={hobby.exercise} />
        운동
      </label>
      <br />
      <label htmlFor="coding" onChange={handleHobby}>
        <input type="checkbox" id="coding" checked={hobby.coding} />
        코딩
      </label>
      <h2>선택된 취미</h2>
      {hobby.length === 0 ? "없음" : hobby}
    </>
  );
}

export default Hobby;
