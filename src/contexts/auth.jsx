import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import mensagem from "../components/Mensagem";

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
    // seto o valor de User para armazenar os dados e tornar true o authenticated
    setUser(email);

    // Salvar o email e a senha no localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }))

    mensagem(`Seja bem-vindo(a)!`, 'blue');
    navidate("/carrinho"); // Redirecionar após o login
  };


  const signUp = (name, email, password) => {
    setUser(email);
    console.log("conta criada com sucesso", { name, email, password });

    localStorage.setItem("user", JSON.stringify({ email, password }))

    mensagem(`Conta criada com sucesso!!!`, 'green');
    navidate("/carrinho"); // Redirecionar após ter criado a conta
  }


  const logout = () => {
    console.log("logout");
    setUser(null); // seta o usuário como null
    localStorage.removeItem("user"); // Remover o usuário do localStorage ao fazer logout
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(user), user, loading, login, signUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
