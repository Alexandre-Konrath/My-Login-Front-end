import React, { useState, useContext } from "react";

import { validatorName, validatorEmail, validatorPassword } from "./validarors";
import { AuthContext } from "../../../contexts/auth";
import img2 from '../../../img/Mobile login-pana.svg'
import api from "../../../services/api";

import './style.css'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("") // Estado para armazenar a segunda senha
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

  async function handlesignUp(e) {
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
      setError(`
      A senha deve ter no mínimo 6 caracteres.
      Pelo menos 1 número.
      Pelo menos 1 caractere especial (!, @, #, etc.).`);
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
      await signUp(name, email, password);
    } catch (error) {
      console.log('Erro ao criar conta:', error);
      setError("Este email já existe em nosso banco de dados.");
    }
  }


  return (
    <div id="login" className="container-sign-up">
      <img src={img2} />
      <h1>Crie sua conta!!!</h1>
      <form className="form-sign-up" onSubmit={handlesignUp}>
        <div className="field-sign-up">
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

        <div className="field-sign-up">
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

        <div className="field-sign-up">
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

        <div className="field-sign-up">
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

        <div className="error ">
          {error && <div className="setError">{error}</div>}
        </div>

        <div className="bolinha-sign-up">
          <div className="bolinha-signup"></div>
          <div className="btn-action-sign-up">
            <button type="submit">Sign-up</button>
          </div>
        </div>
      </form>
    </div>
  );
}
