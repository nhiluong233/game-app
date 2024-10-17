import React from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={10}
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
