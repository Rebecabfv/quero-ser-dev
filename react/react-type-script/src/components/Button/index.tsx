import { ReactNode } from "react";
import { IconType } from "react-icons";
import "./styles.css";

type ButtonProps = {
  id?: string;
  children?: ReactNode;
  Icone?: IconType;
};

// interface IButtonProps {
//   id?: string;
//   texto?: string;
//   Icone?: ReactNode;
// }

export function Button(props: ButtonProps) {
  const { id, Icone, children } = props;
  //   console.log(props.id);
  //   console.log(props.texto);
  return (
    <button id={id} className="default-btn">
      {Icone && <Icone />}
      {/* {texto ? <p>{texto}</p> : <></>} */}
      {/* {temTexto && <p>Text only</p>} */}
      {children}
    </button>
  );
}
