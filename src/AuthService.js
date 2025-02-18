import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const token = response.data.intDataMessage[0].credentials;
    localStorage.setItem("token", token);
    return { success: true, token };
  }  catch (error) {
    if (error.response) {
      return { success: false, message: error.response.data.message || "Error del servidor" };
    } else if (error.request) {
      return { success: false, message: "No se pudo conectar con el servidor" };
    } else {
      return { success: false, message: "Error desconocido" };
    }
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response) {
      return { success: false, message: error.response.data.message || "Error del servidor" };
    } else {
      return { success: false, message: "Error desconocido" };
    }
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (error) {
    return true;
  }
};

export const isAuthenticated = () => {
  return getToken() && !isTokenExpired();
};
