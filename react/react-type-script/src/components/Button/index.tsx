import { FaSpinner, FaThumbsUp } from "react-icons/fa";
import "./styles.css";

export function Button() {
  return (
    <button className="default-btn">
      {/* <sbg></sbg> */}
      <FaThumbsUp />
      <p>Text only</p>
    </button>
  );
}
