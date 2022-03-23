import "./styles.css";

export function ImageGallerry() {
  const url =
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  // const lista = [];
  // for (let i = 0; i < 12; i++) {
  //   lista.push(`https://source.unsplash.com/random/?city,night,${i + 1}`);
  // }

  const lista = Array.from({ length: 12 }, (elemento, indice) => {
    return `https://source.unsplash.com/random/?city,night,${indice}`;
  });

  return (
    <div className="App">
      {/* Exercicio a */}
      {/* <img
          src={url}
          alt=""
          width={180}
          height={180}
        /> */}

      {/* Exercicio b e c*/}
      <ul>
        {lista.map((url) => {
          return (
            <li className="img">
              <img src={url} alt="" width={180} height={180} title="Cidade" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
