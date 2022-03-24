import { FaSpinner, FaThumbsUp } from "react-icons/fa";
import "./styles.css";

export function Button() {
  const temTexto = false;
  return (
    <button className="default-btn">
      {/* <sbg></sbg> */}
      <FaThumbsUp />
      {temTexto ? <p>Text only</p> : <></>}
    </button>
  );
}
