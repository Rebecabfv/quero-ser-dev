import { IconType } from "react-icons";
import "./styles.css";

type ButtonProps = {
  id?: string;
  texto?: string;
  Icone?: IconType;
};

// interface IButtonProps {
//   id?: string;
//   texto?: string;
//   Icone?: ReactNode;
// }

export function Button(props: ButtonProps) {
  const { id, texto, Icone } = props;
  //   console.log(props.id);
  //   console.log(props.texto);
  return (
    <button id={id} className="default-btn">
      {Icone && <Icone />}
      {texto ? <p>{texto}</p> : <></>}
      {/* {temTexto && <p>Text only</p>} */}
    </button>
  );
}
