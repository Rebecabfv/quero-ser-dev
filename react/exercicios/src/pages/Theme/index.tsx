import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./styles.css";

export type Theme = "light" | "dark";

export function Theme() {
  const [theme, setTheme] = useState("dark" as Theme);

  return (
    <>
      <div className={`theme-${theme} themed-page`}>
        <Header theme={theme}></Header>
        <h1>Hi, I can change your theme</h1>
        <h2>Theme actual: {theme}</h2>
        <button
          onClick={() =>
            setTheme((previouState) =>
              previouState === "light" ? "dark" : "light"
            )
          }
        >
          Modified theme
        </button>
      </div>
    </>
  );
}
