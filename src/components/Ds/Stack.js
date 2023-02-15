


import React, { useState } from "react";

const Stack = () => {
  let [word, setWord] = useState("Mohan");

  let arr = [...word];

  const keyController = (e) => {
    let char = String.fromCharCode(e.which).toLowerCase();

    if (e.ctrlKey && char === "y") {
      console.log("Y");
    } else if (e.ctrlKey && char === "z") {
      console.log("z");
    }
    // console.log(e.ctrlKey);
    console.log();
  };

  const onchangeHandler = (e) => {
    setWord(e.target.value);
  };
  console.log(arr);

  return (
    <div>
      <input
        type="text"
        onChange={onchangeHandler}
        onKeyDown={keyController}
      ></input>
    </div>
  );
};

export default Stack;



