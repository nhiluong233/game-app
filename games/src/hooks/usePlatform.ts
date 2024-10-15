import { useQuery } from "@tanstack/react-query";
import APIclient from "../service/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
const apiClient = new APIclient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
