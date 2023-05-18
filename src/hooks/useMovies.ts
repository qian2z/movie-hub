import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const useMovies = () => useData<Movie>("/discover/movie");

export default useMovies;
