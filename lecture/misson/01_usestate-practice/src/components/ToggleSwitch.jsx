import React, { useState } from "react";

function ToggleSwitch() {
  const [contentToggle, setContentToggle] = useState(true);
  const [darkModeToggle, setDarkModeToggle] = useState(false);

  const handleContentToggle = () => {
    setContentToggle((prev) => !prev);
  };

  const handleDarkMode = () => {
    setDarkModeToggle((prev) => !prev);
  };
  return (
    <>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={contentToggle}
          onChange={handleContentToggle}
        />
        콘텐츠 표시 : {contentToggle ? "켜짐" : "꺼짐"}
      </label>
      <br />
      <label htmlFor="darkmode">
        <input
          type="checkbox"
          id="darkmode"
          checked={darkModeToggle}
          onChange={handleDarkMode}
        />
        다크모드 : {darkModeToggle ? "달" : "해"}
      </label>
      <div>{contentToggle ? "이메세지는 조건부로 표시됩니다!" : ""}</div>
    </>
  );
}

export default ToggleSwitch;
