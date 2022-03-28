import "./styles.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="links-container">
      <Link to="/chat">Go to Chat</Link>
      <hr />
      <Link to="/gallery">Go to Image Gallery</Link>
    </div>
  );
}
