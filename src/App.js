import axios from "axios";
import React, { useEffect } from "react";
import { Await } from "react-router-dom";

const App = () => {
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users", {method:"POST"}).then((res) => res.json());
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>App</div>;
};

export default App;
