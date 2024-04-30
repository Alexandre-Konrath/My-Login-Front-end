import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import './style.css'

export default function HomePage() {
  const { logout, authenticated } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="container">
      <h1>HomePage</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
