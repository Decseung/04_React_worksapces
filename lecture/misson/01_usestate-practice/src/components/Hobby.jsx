import React, { useState } from "react";

function Hobby() {
  const [hobbys, setHobbys] = useState([]);

  const handleHobbyChange = (e) => {
    if (e.target.checked) {
      setHobbys([...hobbys, e.target.id]);
    } else {
      setHobbys(hobbys.filter((hobby) => hobby !== e.target.id));
    }
    console.log(hobbys);
  };

  return (
    <>
      <label htmlFor="reading">
        <input
          type="checkbox"
          id="reading"
          checked={hobbys.includes("reading")}
          onChange={handleHobbyChange}
        />
        독서
      </label>
      <br />
      <label htmlFor="music">
        <input
          type="checkbox"
          id="music"
          checked={hobbys.includes("music")}
          onChange={handleHobbyChange}
        />
        음악
      </label>
      <br />
      <label htmlFor="exercise">
        <input
          type="checkbox"
          id="exercise"
          checked={hobbys.includes("exercise")}
          onChange={handleHobbyChange}
        />
        운동
      </label>
      <br />
      <label htmlFor="coding">
        <input
          type="checkbox"
          id="coding"
          checked={hobbys.includes("coding")}
          onChange={handleHobbyChange}
        />
        코딩
      </label>
      <h2>선택된 취미</h2>
      {hobbys.length === 0 ? "없음" : hobbys}
    </>
  );
}

export default Hobby;
