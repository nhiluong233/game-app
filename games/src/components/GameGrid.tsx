import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

interface Props{
  selectedGenre: string;
}

const GameGrid = ({selectedGenre}:Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeleton = [1,2,3,4,5,6];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={10} spacing={3}>
        {isLoading&&skeleton.map((k)=><CardSkeleton key={k}/>)}
        {data.map((g) => (
          <GameCard game={g} key={g.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
