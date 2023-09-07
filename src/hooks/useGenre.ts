import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.genres.find((g) => g.id === id);
};

export default useGenre;
