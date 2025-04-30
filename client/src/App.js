import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import ProjectView from "./pages/ProjectView.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/project/:projectId" element={<ProjectView/>} />
      </Routes>
    </Router>
  );
}

export default App;
