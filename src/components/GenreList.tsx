import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <Text fontSize="xl">{genre.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
