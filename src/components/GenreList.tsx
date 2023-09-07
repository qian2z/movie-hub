import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List marginTop={8}>
      {data?.genres.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <Button
            fontWeight={genre.id === selectedGenreId ? "bold" : ""}
            onClick={() => onSelectGenre(genre)}
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
