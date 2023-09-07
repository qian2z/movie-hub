import { AspectRatio } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  movieId: number;
}

const MovieTrailer = ({ movieId }: Props) => {
  const { data, error, isLoading } = useTrailer(movieId);
  const trailers = data?.results;
  const last = trailers ? trailers[trailers?.length - 1] : null;
  const url = last ? "https://www.youtube.com/embed/" + last.key : null;

  if (isLoading) return null;

  if (error) throw error;

  return url ? (
    <AspectRatio>
      <iframe id="ytplayer" src={url} />
    </AspectRatio>
  ) : null;
};

export default MovieTrailer;
