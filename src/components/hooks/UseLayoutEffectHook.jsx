import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

const UseLayoutEffectHook = (props) => {
  const [data, setData] = useState();
  const [name, setName] = useState(1);


  useEffect(() => {
    setTimeout(() => {
      async function getApiData() {
        console.log("CAll STart");
        await axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((data) => setData(data.data[0].email));
      }
      getApiData();
    }, 3000);

  }, [name]);

  if (true) {
    return <></>
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "red", borderRadius: "50px" }}>{data}</h1>
      <h2>{name}</h2>
      <Button onClick={() => setName((Prev) => Prev + 1)}>Click Me</Button>
    </div>
  );
};

export default UseLayoutEffectHook;
