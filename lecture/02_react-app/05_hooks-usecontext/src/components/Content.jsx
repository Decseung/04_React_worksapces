import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Content() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`content ${isDark ? "darkmode" : ""}`}>
      <p>컨텐츠들임</p>
    </div>
  );
}

export default Content;
