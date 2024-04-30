import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navidate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }

    setLoading(false)
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });
    setUser(email);

    // Salvar o email e a senha no localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }))

    navidate("/"); // Redirecionar após o login
  };


  const log_in = (name, email, password) => {
    console.log("log_in auth", { name, email, password });
  }


  const logout = () => {
    console.log("logout");
    setUser(null); // seta o usuário como null
    localStorage.removeItem("user"); // Remover o usuário do localStorage ao fazer logout
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(user), user, loading, login, log_in, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
