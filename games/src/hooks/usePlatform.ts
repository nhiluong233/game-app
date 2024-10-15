import { useQuery } from "@tanstack/react-query";
import { FetchingData } from "../service/api-client";
import { Platform } from "./useGame";
import apiClient from "../service/api-client";
import platforms from "../data/platforms";

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchingData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
