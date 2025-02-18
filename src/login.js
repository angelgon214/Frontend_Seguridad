import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./AuthService";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiShow, BiHide } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(username, password);
    if (result.success) {
      navigate("/inicio");
    } else {
      toast.error(result.message);
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

            <div className="input-group mb-3">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
              </button>
            </div>

            <button className="btn btn-primary w-100" onClick={handleLogin}>
              Iniciar Sesión
            </button>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <a href="/registro" style={{ display: 'block', marginBottom: '10px', color: '#007bff', textDecoration: 'none' }}>
                ¿No tienes una cuenta? Regístrate aquí
              </a>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
