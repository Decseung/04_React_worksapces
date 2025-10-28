import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <footer className={`footer ${isDark ? "darkmode" : ""}`}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "DarkMode" : "LightMode"}
      </button>
      <p>카피라이트 2025. 올 라이트 리버스드</p>
    </footer>
  );
}

export default Footer;
