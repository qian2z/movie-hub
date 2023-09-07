import { useQuery } from "@tanstack/react-query";
import Movie from "../entities/Movie";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Movie>("/movie");

const useMovie = (id: string, language_iso: string) => {
  return useQuery<Movie, Error>({
    queryKey: ["movie", language_iso, id],
    queryFn: () =>
      apiClient.get(id, {
        params: {
          language: language_iso,
        },
      }),
  });
};

export default useMovie;
