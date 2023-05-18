import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import getImageUrl from "../services/image-url";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card variant="filled" borderRadius={10} overflowY="hidden">
      <Image src={getImageUrl(movie.poster_path)} objectFit="cover" />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <Text mt={2}>{movie.overview}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
