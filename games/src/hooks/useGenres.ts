import { useQuery } from "@tanstack/react-query";
import APIclient from "../service/api-client";
import { FetchingData } from "../service/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new APIclient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchingData<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });

export default useGenres;
