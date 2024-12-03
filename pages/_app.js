import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  { id: 1, name: "Cats", count: 1 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 5 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);
  const animalCount = animals.map((animal) => animal.count);
  const countSum = animalCount.reduce((a, b) => a + b);
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;
  const countAverage = countSum / animals.length;

  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
    // setCount(count + 1);
  }

  function handleSubtract(animalId) {
    // setCount(Math.max(0, count - 1));
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }
  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          countSum={countSum}
          dragonCount={dragonCount}
          countAverage={countAverage}
        />
      </Layout>
    </>
  );
}
