import React, { useState } from "react";

export function Contador() {
  const [soma, setSoma] = useState(0);

  function handleSomar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSoma(soma + 1);
  }

  function handleDiminuir(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSoma(soma - 1);
  }

  return (
    <div>
      <form action="" onSubmit={handleDiminuir} className="math-operation">
        <h1>Counter {soma}</h1>
        <button id="decrease">-</button>
      </form>
      <form action="" onSubmit={handleSomar} className="math-operation">
        <button id="increase">+</button>
      </form>
    </div>
  );
}
