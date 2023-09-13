import React from "react";
import { worker } from "./mock/worker";
import Chart from "./components/Chart";
import ChartBtn from "./components/ChartBtn";
worker.start();

function App() {
  return (
    <div className="App">
      <Chart />
      <ChartBtn />
    </div>
  );
}

export default App;
