import React from "react";
// import { Card } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Card noob={""}>
        <button>Click me to noob programes world</button>
      </Card>
      <Card advanced={"Adanced"}>
        <button style={{ backgroundColor: "red" }}>
          Click me to Advance programer
        </button>
        <u>Hello I am mohan</u>
      </Card>

      <br></br>

      {/* <h1>{ (()=> "MOhan the mass")()}</h1> */}
      <h1>
        {(() => (
          <Card></Card>
        ))()}
      </h1>
    </>
  );
};


const Card = (props) => {
  return (
    <>
      <h1>Coding</h1>
      <h2>{props.advanced}</h2>
      {props.children}
    </>
  );
};

export default Cards;

