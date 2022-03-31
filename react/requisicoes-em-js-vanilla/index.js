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

  const factsTexts = facts.map((fact) => fact.text);
  console.log(factsTexts);
}

async function getUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  console.log(users);
}

async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  console.log(user);
}

async function createUser(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();

  console.log(user);

  return user;
}

getUsers();
createUser({ name: "Maria", email: "re@gmail.com" });
// getRandomFact();
getUser(2);
