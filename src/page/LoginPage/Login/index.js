import React, { useState, useContext } from "react";
import { NavLink } from 'react-router-dom'

import { AuthContext } from "../../../contexts/auth";
import { validatorName, validatorEmail, validatorPassword } from "./validarors";
import api from "../../../services/api";
import './style.css'

export default function Login() {
  const { log_in } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("") // Estado para armazenar a segunda senha
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

  async function handleLog_in(e) {
    e.preventDefault();

    if (!validatorName(name)) {
      setError("O nome deve conter o sobrenome e com letras maiúsculas.");
      return;
    }

    // Validação dos campos
    if (!validatorEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (!validatorPassword(password)) {
      setError("A senha deve ter no mínimo 6 caracteres, incluindo pelo menos 1 número e 1 caractere especial.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Senha diferente da primeira");
      return;
    }

    try {
      const response = await api.post("/users", {
        name,
        email,
        password_hash: password,
      });
      await log_in(name, email, password);
    } catch (error) {
      console.log('Erro ao criar conta:', error);
      setError("Este email já existe em nosso banco de dados.");
    }
  }


  return (
    <div id="login" className="container">
      <h1>Faça seu login</h1>
      <form onSubmit={handleLog_in}>
        <div className="field">
          <label>Nome:</label>
          <input
            type="name"
            id="name"
            value={name}
            placeholder="Digite seu Nome completo"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="textEmail"></small>
        </div>

        <div className="field">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Crie sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small id="textPassword"></small>
        </div>

        <div className="field">
          <label>Confirme a senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="setError">{error}</div>}

        <div className="btn-action">
          <button type="submit">Enviar</button>
          <button>
            <NavLink to='/login'>Voltar</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}
