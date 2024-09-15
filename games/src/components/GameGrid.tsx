import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={10} spacing={10}>
        {games.map((g) => (
          <GameCard game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
