
import React from "react";
import "../assets/styles/index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <header>
        <h1>Sistema de Controle de Estacionamento</h1>
      </header>
      <main>
        <section className="menu">
          <ul className="menu">
            <li><Link to="/cadastro">Cadastrar Vagas</Link></li>
            <li><Link to="/editar">Editar Vagas</Link></li>
            <li><Link to="/procurar">Procurar Vagas</Link></li>
          </ul>
        </section>
      </main>
      <footer>
        Desenvolvido por <a href="https://github.com/Lucas-FernandoJesus" target="_blank" rel="noreferrer">Lucas Fernando</a>
      </footer>
    </>
  );
}
