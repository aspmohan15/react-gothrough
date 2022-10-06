import React from "react";

const FunctionCallingDirectly = () => {
  const TextDisplay = (data) => `hi ${data}! How are ${data}`;
  return <>{(() => TextDisplay("mohan"))()}</>;
};

export default FunctionCallingDirectly;
