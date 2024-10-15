import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import { FetchingData } from "../service/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchingData<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchingData<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
