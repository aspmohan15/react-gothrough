import React, { useMemo, useState } from "react";

const Memo = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  const handleButtonOne = () => {
    setState((state) => state + 1);
  };
  const handleButtonTwo = () => {
    setState1((state) => state + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return state % 2 == 0;
  }, [state]);

  return (
    <div>
      <div>Memo</div>
      <div>
        <button onClick={handleButtonOne}>{"button" + state}</button>
        {isEven ? "even" : "odd"}
      </div>
      <div>
        <button onClick={handleButtonTwo}>{"button" + state1}</button>
      </div>

      <
    </div>
  );
};

export default Memo;
