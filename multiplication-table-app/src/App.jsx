import React from "react";
import "./App.css";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  const targetTable = 20;

  return (
    <div id="container">
      <div className="header-container">
        <Header />
      </div>

      <div className="controller-container">
        <div style={{ marginBottom: 0.5 }}>
          Multiplication Table of {targetTable}
        </div>
        <Controller />
      </div>

      <div className="table-container">
        <Table />
      </div>
    </div>
  );
};

export default App;
