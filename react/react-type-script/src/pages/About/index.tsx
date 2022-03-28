import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <Link to="/home">Pagina home</Link>
      {/* <a href="/home">Pagina home</a> */}
      <h1>Sobre nós</h1>
    </div>
  );
}
