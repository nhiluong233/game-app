import { SimpleGrid } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";

interface Props {
  selectedGenre: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);
  const { data, error, isLoading } = useGame(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <PlatformSelector selectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading && skeleton.map((k) => <CardSkeleton key={k} />)}
        {data.map((g) => (
          <GameCard game={g} key={g.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
