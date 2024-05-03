import React, { useState, useContext } from "react";

import SignUp from './Login/index'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AuthContext } from "../../contexts/auth";
import img1 from '../../img/Login-rafiki.svg'
import mensagem from '../../components/Mensagem'
import api from "../../services/api";
import '../../style/main.css'
import './style.css'

export default function LoginPage() {
  // contexto de verificar se o email e a senha foram preenchidos corretamente
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUpVisible, setSignupVisible] = useState(false);

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
      mensagem("Email ou senha incorretos", "red")
    }
  }

  const handleSignupClick  = () => {
    setSignupVisible(true);
  };
  const handleHideSignupClick  = () => {
    setSignupVisible(false);
  };

  return (
    <div id="login" className="container-login">
        <div className="container-mensagem hidden toast" id="container_mensagem"></div>
      <img src={img1}/>
      <h1>Entre na sua conta</h1>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="field">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
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

        <div className="pagina-sign-up" >
          <p>Não tem conta? </p>
          <a onClick={handleSignupClick}>Crie uma agora, é rápido e fácil</a>
        </div>

        <div className="bolinha-login">
          <div className="bolinha"></div>
          <div className="btn-action">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>

      <section className={`sign-up ${signUpVisible ? 'visible' : ''}`}>
        <SignUp />
          <a className='fechar' id='login' onClick={handleHideSignupClick}><IoMdCloseCircleOutline /></a>
        </section>
    </div>
  );
}
