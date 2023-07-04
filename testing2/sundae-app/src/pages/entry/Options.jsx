import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import axios from "axios";
import ToppingOptions from "./ToppingOptions";

const Options = ({ optionType }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    return (
      <div>
        <h1>server Error</h1>
      </div>
    );
  }

  return (
    <>
      {optionType === "scoops" &&
        data.map((cur, index) => (
          <ScoopOptions key={index} imagePath={cur.imagePath} name={cur.name} />
        ))}
      {optionType === "toppings" &&
        data.map((cur, index) => (
          <ToppingOptions
            key={index}
            imagePath={cur.imagePath}
            name={cur.name}
          />
        ))}
    </>
  );
};

export default Options;
