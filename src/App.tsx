import React from "react";
import { worker } from "./mock/worker";
import Chart from "./components/Chart";
import Router from "./router/router";
worker.start();

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
