import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AnimalFacts() {
  const [dafaultFacts, setDefaultFacts] = useState([]);
  async function getRandomFact() {
    const animalType = "dog";
    const amount = 2;

    const response = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?${animalType}_type=cat&amount=${amount}`,
      {
        method: "GET",
      }
    );

    const facts = await response.json();
    console.log(facts);

    const factsTexts = facts.map((fact: any) => fact.text);
    console.log(factsTexts);

    setDefaultFacts(factsTexts);
  }

  useEffect(() => {
    getRandomFact();
  }, []);

  return (
    <>
      <h1>animal</h1>
      <h2>Exemplos de fatos</h2>
      <ul>
        {dafaultFacts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </>
  );
}
