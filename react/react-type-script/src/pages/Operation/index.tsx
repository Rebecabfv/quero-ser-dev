import React from "react";
import "./styles.css";

export function OperationSum() {
  let soma = 0;

  function handleSomar(event: React.FormEvent<HTMLFormElement>) {
    // nao deixar a pag carregar novamente
    event.preventDefault();

    const numero1Input = event.currentTarget.querySelector("#number-one");
    const numero1 = Number((numero1Input as any).value);

    const numero2Input = event.currentTarget.querySelector("#number-two");
    const numero2 = Number((numero2Input as any).value);

    soma = numero1 + numero2;

    console.log(event.target);
  }

  return (
    <div>
      <form action="" onSubmit={handleSomar} className="math-operation">
        <div>
          <label htmlFor="number-one">Primeiro número</label>
          <input type="text" id="number-one" />
        </div>

        <div>
          <label htmlFor="number-two">Segundo número</label>
          <input type="text" id="number-two" />
        </div>

        {/* <button type="button" onClick={handleSomar}>
          Botao 1
        </button> */}
        <button type="submit">Sum</button>
      </form>
      <h1>Resultado da soma: {soma}</h1>
    </div>
  );
}
