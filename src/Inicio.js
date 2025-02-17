import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, isAuthenticated } from "./AuthService";

const Inicio = () => {
  const navigate = useNavigate();
  const [validSession, setValidSession] = useState(isAuthenticated());

  useEffect(() => {
    
    const interval = setInterval(() => {
      if (!isAuthenticated()) {
        logout();
        setValidSession(false);
        navigate("/login");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  if (!validSession) return null;

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Bienvenido</h2>
      <button className="btn btn-danger" onClick={() => { logout(); navigate("/login"); }}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Inicio;
