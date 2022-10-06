// https://jsonplaceholder.typicode.com/users

import React, { useState, useEffect } from "react";
export default function WindowSizeCalculation() {
  async function dataFetch() {
    let promise = new Promise((resolve, reject) => {
      let req = fetch(`https://jsonplaceholder.typicode.com/users`);
    });
  }
  useEffect(() => {
    dataFetch();
  }, []);

  // console.log(data);

  return (
    <div>
      {/* <div className="image-upload" style={{ position: "relative" }}>
        <label>
          <img
            src="https://cdn.pixabay.com/photo/2022/06/23/03/57/flower-7279065_960_720.jpg"
            width={100}
            height={100}
            style={{
              fontSize: "26px",
              color: "#106DFA",
              zIndex: " 1",
              position: "absolute",
            }}
          />
        </label>
        <input
          type="file"
          // ref={relevingLetterRef}
          style={{
            position: "absolute",
            zIndex: "2",
            opacity: "0",
            top: "10px",
            width: "100px",
            height: "100px",
          }}
          accept=".pdf"
        />
      </div> */}
    </div>
  );
}
