import React, { createRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ForwardChild from "./ForwardChild";

const ForwardRef = () => {
  const buttonRef = createRef();

  const buttonClickHandler = () => {
    buttonRef.current.focus();
  };

  return (
    <div>
      ForwardRef
      <Col>
        <Row>
          <ForwardChild ref={buttonRef} />
        </Row>
        <Row>
          <Button onClick={buttonClickHandler}>Click Me</Button>
        </Row>
      </Col>
    </div>
  );
};

export default ForwardRef;
