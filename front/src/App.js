import React from "react";
import './App.css';
import logo from './logo.JPG'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBoxOpen, faUser, faUsers} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
  <div>
    <div>
      <title>Cala Analitycs</title>
    </div>
    <div className="backgroundGray">
      <header className="header">
        <div className="header-main-top">
          <img src={logo} className="logo" alt="logo"/>
        </div>
      </header>
      <div className="admin">
        Centro de Administracion Cala Analitycs
      </div>
      <main className="main">
        <div className="label">
          <article className="titulo">Bienvenido</article>
        </div>
      </main>
      <article className="container">
        <section className="Pedidos">
          <div className="tituloBtn">
            <a id="botonPedidos" href="/pedidos">Mostrar Pedidos</a>
          </div>
        </section>
        <section className="Analisis">
          <div className="tituloBtn">
            <a id="botonAnalisis" href="/analisis">Mostrar Analisis</a>
          </div>
        </section>
      </article>
    </div>
    <footer>
      <div className="container">
        <div className="copyright">
          <span>Copyrigth &copy; Cala Analytics</span>
        </div>

      </div>
    </footer>









      
  </div>


  )
}
export default App;