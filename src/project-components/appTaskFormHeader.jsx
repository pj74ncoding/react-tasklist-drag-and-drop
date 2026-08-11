import React from "react";
import Foxy from "./fox2.jpg";
import "./appTaskFormHeader.css";

function FormHeader() {
  return (
    <div className="container">
      <div>
        <img
          className="fox-image"
          src={Foxy}
          alt="A fox head"
          height="200px"
          width="200px"
        />
      </div>

      <div>
        <h1 className="header-fox">Leicester Foxes</h1>
        <p>----MY TASKLIST PROJECT----</p>
      </div>
    </div>
  );
}

export default FormHeader;
