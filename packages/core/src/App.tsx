import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import App1 from "@monorepo-poc/app1";
import App2 from "@monorepo-poc/app2";
import { Button } from "@monorepo-poc/components";

import "./App.css";

const Test: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>TEST</h1>
      <Button text="Open App 1" onClick={() => navigate("/app1")} />
      <Button text="Open App 2" onClick={() => navigate("/app2")} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/app1/*" element={<App1 />} />
          <Route path="/app2/*" element={<App2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
