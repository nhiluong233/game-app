import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error.message}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6}
      >
        {isLoading && skeleton.map((k) => <CardSkeleton key={k} />)}
        {data?.results.map((g) => (
          <GameCard game={g} key={g.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
