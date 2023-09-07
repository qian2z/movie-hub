import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useMovieQueryStore from "../store";

const GenreList = () => {
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const { data, error, isLoading } = useGenres(language_iso);
  const selectedGenreId = useMovieQueryStore((m) => m.movieQuery.genreId);
  const setSelectedGenreId = useMovieQueryStore((m) => m.setGenre);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List
      marginTop={8}
      display={{ base: "flex", lg: "block" }}
      flexDirection="column"
      alignItems="center"
    >
      {data?.genres.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <Button
            fontWeight={genre.id === selectedGenreId ? "bold" : ""}
            onClick={() => setSelectedGenreId(genre.id)}
            variant="link"
            fontSize="xl"
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
