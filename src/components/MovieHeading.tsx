import { Button, HStack, Heading } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { MovieQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  movieQuery: MovieQuery;
  onClear: () => void;
}

const MovieHeading = ({ movieQuery, onClear }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.genres.find((g) => g.id === movieQuery.genreId);

  const normalHeading = `${genre?.name || ""} Movies`;

  const searchHeading = `Search '${movieQuery.searchText}'`;

  const heading =
    movieQuery.searchText === undefined ? normalHeading : searchHeading;

  const setButton =
    movieQuery.genreId == null && movieQuery.searchText == undefined
      ? false
      : true;

  return (
    <HStack>
      <Heading as="h1" padding={2} marginY={1} fontSize="5xl">
        {heading}
      </Heading>
      {setButton && (
        <Button onClick={onClear}>
          <ImCross />
        </Button>
      )}
    </HStack>
  );
};

export default MovieHeading;
