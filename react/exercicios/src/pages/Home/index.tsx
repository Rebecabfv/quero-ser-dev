import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/chat">Página ChatBaloon</Link>
      <hr />
      <Link to="/gallerry">Página ImageGallerry</Link>
    </div>
  );
}
