import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DateBadge from "../components/DateBadge";
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
    <Box paddingY={10}>
      <Heading marginBottom={4}>
        {movie.title}
        <DateBadge date={movie.release_date} />
      </Heading>
      <QuoteDivider tagline={movie.tagline} />
      <Text fontSize="xl" marginY={4}>
        {movie.overview}
      </Text>
    </Box>
  );
};

export default MovieDetailsPage;
