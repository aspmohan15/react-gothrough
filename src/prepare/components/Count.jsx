import React from "react";

const Count = ({ count, text }) => {
  console.log(`count rendering ${text}`);
  return <div>{count}</div>;
};

export default React.memo(Count);
