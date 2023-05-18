import useData from "./useData";
import { Genre } from "./useGenres";
import { Language } from "./useLanguges";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const useMovies = (
  selectedGenre: Genre | null,
  selectedLanguage: Language | null
) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        with_genres: selectedGenre?.id,
        language: selectedLanguage?.iso_639_1,
      },
    },
    [selectedGenre?.id, selectedLanguage?.iso_639_1]
  );

export default useMovies;
