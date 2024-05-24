import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth';

import LoginPage from '../../components/LoginPage/index';
import Footer from '../../components/Footer';

import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import burguer from '../../img/burguer.png'
import logo from '../../img/logo.png';

import '../../style/main.css';
import './style.css';

export default function Main() {
  const { authenticated, logout } = useContext(AuthContext);
  // controla a visibilidade do componente Login
  const [loginVisible, setLoginVisible] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  // exibe o componente de Login
  const handleLoginClick = () => setLoginVisible(true);
  // oculta o componente de Login
  const handleHideLoginClick = () => setLoginVisible(false);

  // define a função showLogoutConfirmation como true e abre a mensagem de confirmação
  const handleLogoutClick = () => setShowLogoutConfirmation(true);
  // botão de sim
  const handleLogoutConfirm = () => {
    logout(); // finalmente faz o logout
    setShowLogoutConfirmation(false); // e fecha a modal/mensagem de confirmação
  };
  const handleLogoutCancel = () => setShowLogoutConfirmation(false); // somente fecha a modal

  // controle o botao de login e logout com base no authenticated
  const getClassName = (isAuthenticated, isLogin) =>
    isAuthenticated ? (isLogin ? 'hidden' : 'off-hidden') : (isLogin ? '' : 'hidden');

  return (
    <div className='container'>
      <section className='sec-inicio'>
        <div className='header'>
          <div className='imagem'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='links'>
            <a className='a-link' href='#nav-carrinho'>Cardápio</a>
            <a className='a-link' href='#nav-depoimento'>Depoimentos</a>
            {showLogoutConfirmation && (
              <div className='confirmation'>
                <p>Tem certeza que deseja sair da conta?</p>
                <div className='btn-confirmation'>
                  <button onClick={handleLogoutConfirm}>Sim</button>
                  <button onClick={handleLogoutCancel}>Não</button>
                </div>
              </div>
            )}
            <a className={`${getClassName(authenticated, true)} a-link`} onClick={handleLoginClick}>Login</a>
            <a className={`${getClassName(authenticated, false)} a-link`} onClick={handleLogoutClick}>Logout</a>
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
          <h1>{String(authenticated)}</h1>
        </div>
      </section>

      <section className={`login ${loginVisible ? 'visible' : ''}`}>
        <LoginPage />
        <a className='fechar' id='login' onClick={handleHideLoginClick}><IoMdCloseCircleOutline /></a>
      </section>

      <section id='nav-carrinho' className='sec-cardapio'>
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
        <div className='cardapio'>
          <div className='img-cardapio'>
            <img src={burguer}/>
          </div>
          <div className='descricao-cardapio'>
            <div className='text-descricao'>
              <h3>Nome do Lanche</h3>
              <h3>R$32,00</h3>
            </div>
            <div className='btn-descricao'>
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
          </div>
        </div>


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

      <section id='nav-depoimento' className='sec-depoimento'>
        <div className='img-depoimento'></div>
        <div className='container-depoimento'></div>
      </section>

      <Footer />
    </div>
  );
}
