import { Button, HStack, Heading } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import useGenre from "../hooks/useGenre";
import useMovieQueryStore from "../store";

const MovieHeading = () => {
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);

  const genreId = useMovieQueryStore((m) => m.movieQuery.genreId);
  const genre = useGenre(language_iso, genreId);

  const searchText = useMovieQueryStore((m) => m.movieQuery.searchText);
  const onClear = useMovieQueryStore((m) => m.clearFilters);

  const movieWord = language_iso === "en" ? " Movies" : "电影";
  const searchWord = language_iso === "en" ? "Search" : "搜索";

  const normalHeading = `${genre?.name || ""}${movieWord}`;
  const searchHeading = `${searchWord} '${searchText}'`;

  const heading = searchText === undefined ? normalHeading : searchHeading;

  const setButton = genre == null && searchText == undefined ? false : true;

  return (
    <HStack>
      <Heading as="h1" padding={2} marginY={1} fontSize="5xl">
        {heading}
      </Heading>
      {setButton && (
        <Button onClick={() => onClear(language_iso)}>
          <ImCross />
        </Button>
      )}
    </HStack>
  );
};

export default MovieHeading;
