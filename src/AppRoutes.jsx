import React, { useContext } from "react";

import mensagem from "./components/Mensagem/index";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Main from "./page/MainPage";
import CartPage from "./page/CartPage";

import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  // rota privada
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    // retorna um carregando se estiver no loading
    if (loading) {
      return <div className="loading">Carregando...</div>
    }

    // se não estiver autenticado ele retorna insta para a '/login'
    if (<Navigate to='/carrinho'/> && !authenticated) {
      mensagem('É precisso estar logado para acessar o carrinho', 'red')

      return (
        <Navigate to='/'/>
      )
    }

    return children
  }

  return (
    <Router>
    <div className="container-mensagem hidden toast" id="container_mensagem"></div>
    <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/carrinho" element={<Private><CartPage /></Private>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
