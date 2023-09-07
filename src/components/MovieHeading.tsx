import { Button, HStack, Heading } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import useGenre from "../hooks/useGenre";
import useMovieQueryStore from "../store";

const MovieHeading = () => {
  const genreId = useMovieQueryStore((m) => m.movieQuery.genreId);
  const genre = useGenre(genreId);

  const searchText = useMovieQueryStore((m) => m.movieQuery.searchText);

  const onClear = useMovieQueryStore((m) => m.clearFilters);

  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);

  const normalHeading = `${genre?.name || ""} Movies`;

  const searchHeading = `Search '${searchText}'`;

  const heading = searchText === undefined ? normalHeading : searchHeading;

  const setButton = genre == null && searchText == undefined ? false : true;

  return (
    <HStack>
      <Heading as="h1" padding={2} marginY={1} fontSize="5xl">
        {heading}
      </Heading>
      {setButton && (
        <Button onClick={() => onClear(language_iso || "en")}>
          <ImCross />
        </Button>
      )}
    </HStack>
  );
};

export default MovieHeading;
