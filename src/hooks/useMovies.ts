import useData from "./useData";
import { Genre } from "./useGenres";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const useMovies = (selectedGenre: Genre | null) =>
  useData<Movie>(
    "/discover/movie",
    { params: { with_genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );

export default useMovies;
