import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Child from "./Child";

const UseImperativeHandle = () => {
  const Domref = useRef();
  return (
    <div>
      <div>
        <Button onClick={() => Domref.current.one()}>ONe</Button>
      </div>
      <div>
        <Button onClick={() => Domref.current.one()}>Two</Button>
      </div>
      <Child ref={Domref} />
    </div>
  );
};

export default UseImperativeHandle;
