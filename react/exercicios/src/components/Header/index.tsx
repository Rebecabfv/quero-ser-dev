import { Theme } from "../../pages/Theme";
import "./styles.css";

type HeaderProps = {
  theme: Theme;
};

export function Header(props: HeaderProps) {
  return (
    <div className={`app-header theme-${props.theme}`}>
      <h1>SOU UM HEADER</h1>
    </div>
  );
}
