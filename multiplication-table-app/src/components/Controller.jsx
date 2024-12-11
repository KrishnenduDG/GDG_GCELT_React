import React from "react";
import "./Controller.css";

const Controller = () => {
  return (
    <div id="controller-main-div">
      <input type="range" min={2} max={20} />
    </div>
  );
};

export default Controller;
