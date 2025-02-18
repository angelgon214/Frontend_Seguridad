import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./AuthService";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const result = await register(username, email, password);
    if (result.success) {
      navigate("/login");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Registro</h2>
            
            <input
              type="text" className="form-control mb-3" placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email" className="form-control mb-3" placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" className="form-control mb-3" placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button className="btn btn-primary w-100" onClick={handleRegister}>
              Registrar
            </button>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <a href="/login" style={{ display: 'block', marginBottom: '10px', color: '#007bff', textDecoration: 'none' }}>
                ¿Ya tienes una cuenta? Click Aqui
              </a>
            </div>

            {message && <p className="text-danger text-center mt-3">{message}</p>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
