import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./app/auth/Login/page";
import RegisterForm from "./app/auth/Register/page";
import Task from "./app/task/page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Task />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
