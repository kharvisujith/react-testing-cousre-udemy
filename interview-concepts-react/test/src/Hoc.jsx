import { useState } from "react";

const Hoc = (OriginalComp) => {
  const NewComp = () => {
    const [sal, setSal] = useState(10);
    const handleclick = () => {
      setSal((prev) => prev + 10);
    };
    return <OriginalComp sal={sal} handleclick={handleclick} />;
  };
  return NewComp;
};

export default Hoc;
