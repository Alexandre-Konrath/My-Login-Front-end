import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/auth";

import mensagem from "../Mensagem";

import './style.css'


export default function HomePage() {
  const { logout, authenticated, user } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated && user) {
    }
  }, [authenticated, user]);

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="container-home">
      <div class="container-mensagem hidden toast" id="container_mensagem"></div>
      <h1>Página de carrinho</h1>
      <p>{String(authenticated)}</p>
      <a href="/">voltar para o cardapio</a>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
