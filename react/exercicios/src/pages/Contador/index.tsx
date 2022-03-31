import React, { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  function handleIncrement() {
    setContador((previousState) => previousState + 1);
  }

  function handleDecrement() {
    setContador((previousState) => previousState - 1);
  }

  return (
    <div>
      {/* <form action="" onSubmit={handleDiminuir} className="math-operation">
        <h1>Counter {soma}</h1>
        <button id="decrease">-</button>
      </form>
      <form action="" onSubmit={handleSomar} className="math-operation">
        <button id="increase">+</button>
      </form> */}
      <h1>Contador: {contador}</h1>
      <button onClick={handleIncrement}>incrementar</button>

      <button onClick={handleDecrement}>decrementar</button>
    </div>
  );
}
