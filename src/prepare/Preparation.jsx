import React, { useCallback, useState } from "react";
import Tittle from "./components/Tittle";
import Count from "./components/Count";
import Button from "./components/Button";

const Preparation = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(10000);

  const handleSalary = useCallback(() => {
    setSalary((salary) => salary + 1);
  }, [salary]);
  const handleAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  return (
    <div>
      <Tittle />
      <Button handleClick={handleSalary}>Increment Salary Button</Button>
      <Count count={age} text="Increment Salary"></Count>
      <Button handleClick={handleAge}>Increment Age Button</Button>
      <Count count={salary} text="Increment Age"></Count>
    </div>
  );
};

export default Preparation;
