import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MoveHeading = ({ movieQuery }: Props) => {
  const normalHeading = `${movieQuery.language?.english_name || ""} ${
    movieQuery.genre?.name || ""
  } Movies`;

  const searchHeading = `Search '${movieQuery.searchText}'`;

  const heading =
    movieQuery.searchText === undefined ? normalHeading : searchHeading;

  return (
    <Heading as="h1" padding={2} marginY={1} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MoveHeading;
