import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieQuery } from "../App";
import APIClient from "../services/api-client";

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
  const endpoint =
    movieQuery.searchText === undefined ? "/discover/movie" : "/search/movie";

  const apiClient = new APIClient<MoviesFetchResponse>(endpoint);

  return useInfiniteQuery<MoviesFetchResponse, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genre?.id,
          language: movieQuery.language?.iso_639_1,
          sort_by: movieQuery.sortOrder,
          query: movieQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
