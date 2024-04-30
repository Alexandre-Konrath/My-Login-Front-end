import React, { useState, useContext  } from "react";
import { NavLink } from 'react-router-dom'

import { AuthContext } from "../../../contexts/auth";
import api from "../../../services/api";
import './style.css'

export default function Login() {

  const { log_in } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  async function handleLog_in(e) {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, digite a mesma senha nos dois campos.");
        return;
      }

      const response = await api.post("/users", {
        name,
        email,
        password_hash: password,
      })
      await log_in(name, email, password)
      alert("conta criada com sucesso.fm")

    } catch (error) {
      console.log('email já cadastrado')
      alert("Este email, ja existe no nosso banco de dados")
    }
  }

  return (
    <div id="login" className="container">
      <h1>Faça seu login</h1>
      <form  onSubmit={handleLog_in}>
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
        </div>

        <div className="field">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="crie sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Confirme a senha:</label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            placeholder="crie sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

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
