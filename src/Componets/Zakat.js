import React from "react";
import { useState } from "react";
import "./Style.css";

const Zakat = () => {
  const [Cash, setCash] = useState();
  const [zakat, setZakat] = useState();

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setZakat("");
    setCash(event.target.value);
  };

  const zakatCheck = () => {
    setZakat(Cash / 40);
    setCash("");
  };
  return (
    <>
      <div className="zakat-container">
        <input
          type="number"
          placeholder="Enter Your Cash"
          onChange={inputEvent}
          value={Cash}
        />
        <br />
        <button onClick={zakatCheck}>Check</button>
        <br />
        <h1>{zakat} </h1>
      </div>
    </>
  );
};

export default Zakat;
