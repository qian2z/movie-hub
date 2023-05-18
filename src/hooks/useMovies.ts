import { MovieQuery } from "../App";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const useMovies = (movieQuery: MovieQuery) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        with_genres: movieQuery.genre?.id,
        language: movieQuery.language?.iso_639_1,
        sort_by: movieQuery.sortOrder,
      },
    },
    [movieQuery]
  );

export default useMovies;
