import axios from "axios";
import React, { useEffect, useState } from "react";

const Learning = () => {
  const [display, setDisplay] = useState();
  const getData = async () => {
    let response = await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => data.data);

    console.log(response);
    setDisplay(response);
    // console.log(response);
  };
  const getAnotherData = async () => {
    let response = await axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((data) => data.data);
    console.log(response);
    setDisplay((prev) => ({ ...prev, ...response }));
  };

  console.log(display);
  useEffect(() => {
    getData();
    getAnotherData();
  }, []);

  return <div>{display?.name}</div>;
};

export default Learning;
