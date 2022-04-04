import { useEffect, useState } from "react";
import "./styles.css";

type Properties = {
  id: number;
  login: string;
  name: string;
  company: string;
};

export function InfoGitHub() {
  const [properties, setProperties] = useState<Properties>({} as Properties);
  const [gitHubRepositories, setgitHubRepositories] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getPropsGit() {
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/rebecabfv`);

      const propsGit = await response.json();

      setProperties(propsGit);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getGitHubRepositories() {
    const response = await fetch(
      "https://api.github.com/users/Rebecabfv/repos"
    );

    const repositories = await response.json();

    setgitHubRepositories(gitHubRepositories);
  }

  useEffect(() => {
    getPropsGit();
  }, []);

  return (
    <>
      <h1>GitHub</h1>
      {isLoading && (
        <img src="https://a-static.mlcdn.com.br/618x463/adesivo-parede-decorativo-loading-carregando-palavra-barra-aartedecor/aartedecor/1541-1863/bbc74def4e1116a12776398372101bcd.jpg"></img>
      )}
      <ul>
        {properties.name && (
          <li key={properties.id}>
            <p>Name: {properties.name}</p>
            <p>Login: {properties.login}</p>
            <p>Company: {properties.company}</p>
          </li>
        )}
      </ul>
    </>
  );
}
