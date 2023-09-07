import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

const apiClient = new APIClient<{ genres: Genre[] }>("/genre/movie/list");

const useGenres = (language_iso: string) =>
  useQuery({
    queryKey: ["genres", language_iso],
    queryFn: () =>
      apiClient.getAll({
        params: {
          language: language_iso,
        },
      }),
    staleTime: ms("24h"),
  });

export default useGenres;
