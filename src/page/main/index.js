import React, { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import LoginPage from '../../components/LoginPage/index'
import logo from '../../img/logo.png';
import '../../style/main.css'
import './style.css';
import Footer from '../../components/Footer';

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
            <a>Cardápio</a>
            <a>Depoimentos</a>
            {/* adicionar a classe aqui */}
            <a onClick={handleLoginClick}>Login</a>
            <a href='/carrinho' className='btn-icon'>
              Meu Carrinho
              <span className='icon'>
                <div className='btn-quantidade'>0</div>
                <FaShoppingCart/>
              </span>
            </a>
          </div>
        </div>
        <div className='inicio'>
          <h1>Início</h1>
        </div>
      </section>

      <section className={`login ${loginVisible ? 'visible' : ''}`}>
        <LoginPage />
          <a className='fechar' id='login' onClick={handleHideLoginClick}><IoMdCloseCircleOutline />
          </a>
      </section>

      <section className='sec-cardapio'>
        <div className='filtro-cardapio'>
          <nav className='nav-filtro'>
            <ul className='lista'>
              <li>Hambúrguers</li>
              <li>Pizzas</li>
              <li>Bebidas</li>
              <li>Sobremesas</li>
            </ul>
          </nav>
        </div>


        <div className='container-cardapio'>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
          <div className='cardapio'></div>
        </div>
        <div className='btn-cardapio-vermais'>
          <button>Ver mais</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
