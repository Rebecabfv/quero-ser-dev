import { Theme } from "../../pages/Theme";
import "./styles.css";

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  theme: Theme;
};

export function Header(props: HeaderProps) {
  return (
    <div className={`app-header theme-${props.theme}`}>
      <header>SOU UM HEADER</header>
    </div>
  );
}
