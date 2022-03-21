import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const titulo = "React";
  const tecnologiasAprendidas = [
    {
      nome: "HTML",
      topico: "Frontend Estatico",
    },
    {
      nome: "CSS",
      topico: "Frontend Estatico",
    },
    {
      nome: "JS ",
      topico: "Lógica de Programação",
    },
  ];

  return (
    <div className="App">
      <header>Cabeçalho da página</header>
      <main>
        <div>
          <h1>Conteudo da página</h1>
          <h2>Aprendendo {titulo.toUpperCase()}</h2>
          <div></div>
          <h2>Conhecimentos já adquiridos:</h2>
          <ul>
            {tecnologiasAprendidas.map((tecnologia) => {
              return (
                <li>
                  <section>
                    <h3>{tecnologia.nome}</h3>
                    <p>Aprendido no módulo: {tecnologia.topico}</p>
                  </section>
                </li>
              );
            })}
            {/* <li>
              <section>
                <h3>HTML</h3>
                <p>Aprendido no módulo: Frontend Estaático</p>
              </section>
            </li>
            <li>
              <section>
                <h3>CSS</h3>
                <p>Aprendido no módulo: Frontend Estaático</p>
              </section>
            </li>
            <li>
              <section>
                <h3>JS</h3>
                <p>Aprendido no módulo: Lógica de programacao</p>
              </section>
            </li> */}
          </ul>
        </div>
      </main>
      <footer>Rodapé da página</footer>
    </div>
  );
}

export default App;
