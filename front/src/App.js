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
        <div className="label">
          <article className="titulo">Bienvenido</article>
        </div>
        <div className="label">
          <article className="titulo">Bienvenido</article>
        </div>
        


      </main>
    </div>









      
  </div>


  )
}
export default App;