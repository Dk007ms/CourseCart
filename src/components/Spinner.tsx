import React from "react";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  width:"10rem",
  height:"10rem",
  position:"relative",
  top:"5rem",
};

function Spinner() {
  return (
    <div className="sweet-loading">
      <HashLoader
        color="#ffff00"
        cssOverride={override}
        size={90}
      />
    </div>
  );
}

export default Spinner;
