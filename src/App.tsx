import React from "react";
import { worker } from "./mock/worker";
import Chart from "./components/Chart";
worker.start();

function App() {
  return (
    <div className="App">
      <Chart />
    </div>
  );
}

export default App;
