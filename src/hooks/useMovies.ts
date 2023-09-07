import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Movie from "../entities/Movie";
import APIClient from "../services/api-client";
import useMovieQueryStore from "../store";

interface MoviesFetchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useMovies = () => {
  const movieQuery = useMovieQueryStore((m) => m.movieQuery);

  const endpoint =
    movieQuery.searchText === undefined ? "/discover/movie" : "/search/movie";

  const apiClient = new APIClient<MoviesFetchResponse>(endpoint);

  return useInfiniteQuery<MoviesFetchResponse, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId,
          language: movieQuery.language_iso,
          sort_by: movieQuery.sortOrder,
          query: movieQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
