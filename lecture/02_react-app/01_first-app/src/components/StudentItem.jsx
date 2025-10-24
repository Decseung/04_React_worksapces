import React from "react";

function StudentItem({ student }) {
  return (
    <p>
      이름은: {student.name}
      <br />
      이름은: {student.age}
    </p>
  );
}

export default StudentItem;
