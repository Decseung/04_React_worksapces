import React from "react";
import { useParams } from "react-router-dom";

/*
  /practice/it/2
  /practice/it/5
  /practice/history/1
  /practice/art/5
*/
function Practice() {
  const { category, uid } = useParams();
  return (
    <div>
      <h5>{category} 페이지</h5>
      <p>{uid}번 게시물</p>
    </div>
  );
}

export default Practice;
