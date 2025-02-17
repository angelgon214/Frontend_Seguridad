import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthService";
import Login from "./login";
import Inicio from "./Inicio";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Jose Angel Gonzalez Santafe | IDGS011</a>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
