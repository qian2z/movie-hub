import useGenres from "./useGenres";

const useGenre = (language_iso: string, id?: number) => {
  const { data: genres } = useGenres(language_iso);
  return genres?.genres.find((g) => g.id === id);
};

export default useGenre;
