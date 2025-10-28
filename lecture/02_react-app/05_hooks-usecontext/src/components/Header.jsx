import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { isDark } = useContext(ThemeContext);
  return (
    <header className={`header ${isDark ? "darkmode" : ""}`}>
      <h1>헤더임</h1>
    </header>
  );
}

export default Header;
