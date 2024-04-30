import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Log_in from "./components/LoginPage/Login"

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
