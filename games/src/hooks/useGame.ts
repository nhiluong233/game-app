import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchingData } from "../service/api-client";
import APIclient from "../service/api-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIclient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchingData<Game>, Error>({
    queryKey: ["games", gameQuery], //anything change related to games and gameQuery will be reload page
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGame;
