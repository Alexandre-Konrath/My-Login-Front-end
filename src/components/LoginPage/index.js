import React, { useState, useContext  } from "react";
import { NavLink } from 'react-router-dom'

import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";
import './style.css'

export default function LoginPage() {
  // contexto de verificar se o email e a senha foram preenchidos corretamente
  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // navegação
  // const navidate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault();
    try {
      // consulta a api se o email e o password existem
      const response = await api.post("/login", {
        email,
        password_hash: password,
      });
      // chama o login
      await login(email, password);

    } catch (error) {
      console.error("Erro de autenticação:", error);
      alert("Email ou senha incorretos")
    }
  }

  return (
    <div id="login" className="container">
      <h1>Login do Sistema</h1>
      {/* chama o authenticated */}
      <p>{String(authenticated)}</p>
      <form onSubmit={handleLogin}>
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

            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="btn-action">
          <button type="submit">Entrar</button>

          <button>
            <NavLink to='/log_in'>Faça seu login</NavLink>
          </button>

        </div>
      </form>
    </div>
  );
}
