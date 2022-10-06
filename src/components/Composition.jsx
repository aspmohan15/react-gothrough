import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedOut, setLogin } from "../store/AuthSlice";
import thunk from "redux-thunk";

const Composition = ({ dataHandler }) => {
  const [state, setstate] = useState("Data from Child");
  dataHandler(state);
  return (
    <div>
      <div>MOhan</div>
      {/* <button onClick={() =>                                       dataHandler(state)}>Click Me</button> */}
    </div>
  );
};

export default Composition;
