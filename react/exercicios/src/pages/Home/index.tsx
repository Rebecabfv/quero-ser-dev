import "./styles.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="links-container">
      <Link to="/chat">Go to Chat</Link>
      <hr />
      <Link to="/gallery">Go to Image Gallery</Link>
      <hr />
      <Link to="/count">Go to Count</Link>
      <hr />
      <Link to="/list">Go to List Students</Link>
      <hr />
      <Link to="/github">Go to GitHub Rebeca</Link>
    </div>
  );
}
