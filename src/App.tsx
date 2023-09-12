import React, { useEffect } from "react";
import { worker } from "./mock/worker";
worker.start();

function App() {
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('error', error));
  }, []);

  return <div className="App">{"메인 페이지"}</div>;
}

export default App;
