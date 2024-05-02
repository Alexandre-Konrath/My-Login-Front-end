import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Log_in from "./page/LoginPage/Login";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";

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
    if(!authenticated) {
      return <Navigate to='/login'/>
    }

    return children
  }

  return (
    <Router>
    <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/log_in" element={<Log_in />}/>
          <Route exact path="/" element={<Private><HomePage /></Private>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
