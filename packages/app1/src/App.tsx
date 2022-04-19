import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@monorepo-poc/components";

import "./App.css";

const App1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>I AM APP1</h1>
      <Button text="Back to Core App" onClick={() => navigate("/")} />
      <Button text="Go to App2" onClick={() => navigate("/app2")} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App1 />} />
      </Routes>
    </div>
  );
}

export default App;
