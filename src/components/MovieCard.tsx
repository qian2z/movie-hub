import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import getImageUrl from "../services/image-url";
import VotingAvgBadge from "./VotingAvgBadge";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card width="100%" height="100%" variant="filled">
      <Image src={getImageUrl(movie.poster_path)} objectFit="cover" />
      <CardBody>
        <Heading fontSize="2xl">
          {movie.title}
          <VotingAvgBadge rating={movie.vote_average} />
        </Heading>
        <Text mt={2}>{movie.overview}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
