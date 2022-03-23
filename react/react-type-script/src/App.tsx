import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const listaDeTarefas = [
    {
      nome: "Dar comida para o gato",
      categoria: "pets",
      concluida: false,
    },
    {
      nome: "Dar comida para o peixe",
      categoria: "pets",
      concluida: true,
    },
    {
      nome: "Estudar react",
      categoria: "dev web",
      concluida: false,
    },
  ];

  return (
    <div className="App">
      <h1>Hey</h1>
      <h1>{"Hey".toUpperCase()}</h1>
      <ul>
        {listaDeTarefas.map((tarefa) => {
          return (
            <li>
              <h3>{tarefa.nome}</h3>
              <p>{"categoria: " + tarefa.categoria}</p>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}

export default App;
