import { useQuery } from "@tanstack/react-query";
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
  useQuery<FetchingData<Game>, Error>({
    queryKey: ["games", gameQuery], //anything change related to games and gameQuery will be reload page
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGame;
