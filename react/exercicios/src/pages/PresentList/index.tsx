import { useState } from "react";

export function PresentList() {
  const [names, setNomes] = useState([] as string[]);

  function handleAdicionarNomes(event: React.FormEvent<HTMLFormElement>) {
    // nao deixar a pag carregar novamente
    event.preventDefault();

    const nameInput = event.currentTarget.querySelector("#add-name");
    const name = (nameInput as any).value;

    setNomes((nomesAntigo) => {
      return [...nomesAntigo, name];
    });

    console.log(event.target);
  }

  return (
    <div>
      <form action="" onSubmit={handleAdicionarNomes}>
        <label htmlFor="add-name">Nome do aluno: </label>
        <input type="text" name="" id="add-name" />

        <button type="submit">Adicionar na lista</button>
      </form>

      <h1>Lista dos Alunos:</h1>
      <ul>
        {names.map((name, indice) => (
          <li>{`${indice + 1} ) ${name}`}</li>
        ))}
      </ul>
    </div>
  );
}
