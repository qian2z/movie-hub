import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import useMovieQueryStore from "../store";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const { data: movie, error, isLoading } = useMovie(id!, language_iso);

  if (isLoading) return <Spinner />;

  if (error || !movie) return error;

  return (
    <Box paddingY={10}>
      <Heading marginBottom={5}>{movie.title}</Heading>
      <Text fontSize="xl">{movie.overview}</Text>
    </Box>
  );
};

export default MovieDetailsPage;
