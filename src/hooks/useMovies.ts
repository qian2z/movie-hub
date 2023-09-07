import { useQuery } from "@tanstack/react-query";
import { MovieQuery } from "../App";
import apiClient from "../services/api-client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MoviesFetchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useMovies = (movieQuery: MovieQuery) => {
  const endPoint =
    movieQuery.searchText === undefined ? "/discover/movie" : "/search/movie";

  return useQuery<MoviesFetchResponse, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient
        .get<MoviesFetchResponse>(endPoint, {
          params: {
            with_genres: movieQuery.genre?.id,
            language: movieQuery.language?.iso_639_1,
            sort_by: movieQuery.sortOrder,
            query: movieQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
};

export default useMovies;
