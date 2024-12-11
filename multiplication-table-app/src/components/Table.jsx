import React from "react";
import MultiplicationRow from "./MultiplicationRow";
import "./Table.css";

const Table = () => {
  return (
    <div id="table-main-div">
      {new Array(10).fill(0).map((el, idx) => {
        return (
          <div id="table-row-container">
            <MultiplicationRow key={idx + 1} count={idx + 1} />
          </div>
        );
      })}
    </div>
  );
};

export default Table;
