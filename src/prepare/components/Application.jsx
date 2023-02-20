// import { Col, Form, Row } from "react-bootstrap";
// import React, {
//   Suspense,
//   useEffect,
//   useState,
//   useReducer,
//   useRef,
//   lazy,
// } from "react";
// import Select from "react-select";
// import { Button } from "react-bootstrap";
// import { Prev } from "react-bootstrap/esm/PageItem";
// import { FormValidate } from "./components/FormValidate";
// import { ParentComponet } from "./pages/home/ParentComponet";
// import { UseEffectHooksExplore } from "./components/useEffectHooksExplore";
// import { Brother } from "./components/ancestorDataProcessing/Brother";
// import { Sister } from "./components/ancestorDataProcessing/Sister";
// import axios, { Axios } from "axios";
// import Cards from "./components/cards/Cards";
// import FunctionCallingDirectly from "./components/tricks/FunctionCallingDirectly";
// import WindowSizeCalculation from "./components/WindowSizeCalculation";
// import ForwardRef from "./components/ForwardRef";
// import UseEffectHook from "./components/hooks/UseEffectHook";
// import UseLayoutEffectHook from "./components/hooks/UseLayoutEffectHook";
// import UseImperativeHandle from "./components/hooks/UseImperativeHandle";
// import Composition from "./components/Composition";
// import GoogleOauth from "./components/GoogleOauth";
// import Stack from "./components/Ds/Stack";
// import Hooks from "./components/hooks/Hooks";
// import Learning from "./components/Learning";
// import { Formik } from "formik";
// import { SignupForm } from "./components/Formik";
// import Preparation from "./prepare/Preparation";
// import Memo from "./prepare/Memo";
// import { GetJsonData } from './components/fetchFromJsonApi/GetJsonData';

function App() {
  const clickHandler = (e) => {
    e.preventDefault();
  };

  // const ref = useRef();
  // console.log(ref.current.value);

  //   const OtherComponent = lazy(() =>
  //     import("./components/fetchFromJsonApi/GetJsonData")
  //   );

  //   const dataHandler = (data) => {
  //     console.log("data parent child", data);
  //   };
  return (
    <>
      {/* <input ref={ref}></input> */}
      {/* <FormValidate /> */}
      {/* <UseReducer /> */}
      {/* <BootsTrapTab /> */}
      {/* <ParentComponet /> */}
      {/* <UseEffectHooksExplore /> */}
      {/* <Sister input={input} /> */}
      {/* <Brother setInput={setInput} /> */}
      {/* <Cards /> components Compositions */}
      {/* <FunctionCallingDirectly /> */}
      {/* <WindowSizeCalculation /> */}
      {/* <ForwardRef /> */}
      {/* <UseLayoutEffectHook />
      <UseEffectHook />
      <UseImperativeHandle /> */}
      {/* <Composition dataHandler={dataHandler} data="Mohan" /> */}
      {/* <Stack /> */}
      {/* <Hooks /> */}
      {/* <Learning /> */}
      {/* <SignupForm /> */}
      {/* <Preparation /> */}
    </>
  );
}

export default App;
