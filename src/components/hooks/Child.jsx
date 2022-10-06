import React, { useImperativeHandle, useRef } from "react";

const Child = (props, ref) => {
  const refOne = useRef();
  const refTwo = useRef();

  useImperativeHandle(ref, () => {
    return {
      one: () => refOne.current.focus(),
      two: () => refOne.current.focus(),
    };
  });

  return (
    <div>
      <div>
        <input ref={refOne}></input>
        <input ref={refTwo}></input>
      </div>
    </div>
  );
};

export default React.forwardRef(Child);
