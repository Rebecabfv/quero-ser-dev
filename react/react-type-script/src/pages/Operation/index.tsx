import React, { useState } from "react";
import "./styles.css";

export function OperationSum() {
  const [soma, setSoma] = useState(0);
  const [historico, setHistorico] = useState([] as number[]);
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  function handleSomar(event: React.FormEvent<HTMLFormElement>) {
    // nao deixar a pag carregar novamente
    event.preventDefault();

    // Resolucao usando APIs de JavaScript Vanilla (querySelector)
    // const numero1Input = event.currentTarget.querySelector("#number-one");
    // const numero1 = Number((numero1Input as any).value);

    // const numero2Input = event.currentTarget.querySelector("#number-two");
    // const numero2 = Number((numero2Input as any).value);

    setSoma(numero1 + numero2);

    setHistorico((historicoAntigo) => {
      return [...historicoAntigo, numero1 + numero2];
    });

    console.log(event.target);
  }

  return (
    <div>
      <form action="" onSubmit={handleSomar} className="math-operation">
        <div>
          <label htmlFor="number-one">Primeiro número</label>
          <input
            type="text"
            id="number-one"
            value={numero1}
            onChange={(event) => setNumero1(Number(event.target.value))}
          />
        </div>

        <div>
          <label htmlFor="number-two">Segundo número</label>
          <input
            type="text"
            id="number-two"
            value={numero2}
            onChange={(event) => setNumero2(Number(event.target.value))}
          />
        </div>

        {/* <button type="button" onClick={handleSomar}>
          Botao 1
        </button> */}
        <button type="submit">Sum</button>
      </form>
      <h1>Resultado da soma: {soma}</h1>
      <h2>Historico de operações:</h2>
      <ul>
        {historico.map((resultado) => (
          <li>{resultado}</li>
        ))}
      </ul>
    </div>
  );
}
