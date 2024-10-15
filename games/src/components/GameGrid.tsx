import React from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <Box padding={10}>
      {error && <p>{error.message}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading && skeleton.map((k) => <CardSkeleton key={k} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={()=>fetchNextPage()} marginY={5}>
          <Text>{isFetchingNextPage ? "Loading..." : "Load More"}</Text>
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
