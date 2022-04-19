import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@monorepo-poc/components";

import "./App.css";

const App2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>I AM APP2</h1>
      <Button text="Back to Core App" onClick={() => navigate("/")} />
      <Button text="Go to App1" onClick={() => navigate("/app1")} />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App2 />} />
      </Routes>
    </div>
  );
}

export default App;
