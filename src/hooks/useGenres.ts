import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

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
