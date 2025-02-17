import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./AuthService";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(username, password);
    if (result.success) {
      navigate("/inicio");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={handleLogin}>
              Iniciar Sesión
            </button>
            {message && <p className="text-danger text-center mt-3">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
