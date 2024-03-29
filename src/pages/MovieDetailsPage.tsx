import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MovieAttribute from "../components/MovieAttribute";
import MovieImages from "../components/MovieImages";
import MovieTrailer from "../components/MovieTrailer";
import QuoteDivider from "../components/QuoteDivider";
import useMovie from "../hooks/useMovie";
import useMovieQueryStore from "../store";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const { data: movie, error, isLoading } = useMovie(id!, language_iso);

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={10}>
      <Box>
        <Heading marginBottom={4}>{movie.title}</Heading>
        <QuoteDivider tagline={movie.tagline} />
        <Text fontSize="xl" marginY={4}>
          {movie.overview}
        </Text>
        <MovieAttribute movie={movie} />
      </Box>
      <Box>
        <MovieTrailer movieId={movie.id} />
        <MovieImages movieId={movie.id} />
      </Box>
    </SimpleGrid>
  );
};

export default MovieDetailsPage;
