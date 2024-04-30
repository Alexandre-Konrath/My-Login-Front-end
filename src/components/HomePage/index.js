import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/auth";
import './style.css'
import Mensagem from "../Mensagem";


export default function HomePage() {
  const { logout, authenticated, user } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated && user) {
      Mensagem(`Seja bem-vindo(a)!`, 'blue');
    }
  }, [authenticated, user]);

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="container">
      <div class="container-mensagem hidden toast" id="container_mensagem"></div>
      <h1>HomePage</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
