import React, { useState } from 'react';

import SignUp from '../../components/LoginPage/Login'
import { IoMdCloseCircleOutline } from "react-icons/io";
import LoginPage from '../../components/LoginPage/index'
import logo from '../../img/logo.png';
import '../../style/index.css'
import './style.css';

export default function Main() {

  const [loginVisible, setLoginVisible] = useState(false);


  const handleLoginClick = () => {
    setLoginVisible(true);
  };
  const handleHideLoginClick = () => {
    setLoginVisible(false);
  };

  return (
    <div className='container'>
      <section className='sec-inicio'>
        <div className='header'>
          <div className='imagem'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='links'>
            <a onClick={handleLoginClick}>login - sign-up</a>
          </div>
        </div>
      </section>

      <section className={`login ${loginVisible ? 'visible' : ''}`}>
        <LoginPage />
          <a className='fechar' id='login' onClick={handleHideLoginClick}><IoMdCloseCircleOutline />
          </a>
      </section>

      <section className='sec-cardapio'>
        <h1>cardapio</h1>
      </section>

      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}
