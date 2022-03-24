import React from "react";

export function TaskList() {
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
  );
}
