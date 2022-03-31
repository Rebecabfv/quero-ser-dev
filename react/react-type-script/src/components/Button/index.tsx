import { ReactNode } from "react";
import { IconType } from "react-icons";
import "./styles.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // Props que ja esta vindo do button
  // id?: string;
  // children?: ReactNode;
  Icone?: IconType;
};

// interface IButtonProps {
//   id?: string;
//   texto?: string;
//   Icone?: ReactNode;
// }

export function Button(props: ButtonProps) {
  const { id, Icone, children, ...rest } = props;
  //   console.log(props.id);
  //   console.log(props.texto);
  return (
    <button className="default-btn" {...rest}>
      {Icone && <Icone />}
      {/* {texto ? <p>{texto}</p> : <></>} */}
      {/* {temTexto && <p>Text only</p>} */}
      {children}
    </button>
  );
}
