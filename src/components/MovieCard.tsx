import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card variant="filled">
      <Image src={movie.poster_path} objectFit="cover" />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
