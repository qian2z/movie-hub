import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import getImageUrl from "../services/image-url";
import VotingAvgBadge from "./VotingAvgBadge";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Card width="100%" height="100%" variant="filled">
        <Image src={getImageUrl(movie.poster_path)} objectFit="cover" />
        <CardBody>
          <Heading fontSize="3xl">
            {movie.title}
            <VotingAvgBadge rating={movie.vote_average} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MovieCard;
