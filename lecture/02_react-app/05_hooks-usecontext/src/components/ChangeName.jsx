import React from "react";

function ChangeName({ setCurrentName, names }) {
  return (
    <>
      {names.map((name, index) => (
        <button key={index} onClick={() => setCurrentName(name)}>
          {name}
        </button>
      ))}
    </>
  );
}

export default ChangeName;
