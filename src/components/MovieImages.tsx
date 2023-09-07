import { Image, SimpleGrid } from "@chakra-ui/react";
import useImages from "../hooks/useImages";
import getImageUrl from "../services/image-url";

interface Props {
  movieId: number;
}

const MovieImages = ({ movieId }: Props) => {
  const { data, error, isLoading } = useImages(movieId);

  if (isLoading) return null;

  if (error) throw error;

  const images = data?.backdrops;

  return images ? (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap={2} marginY={5}>
      {images?.map((image) => (
        <Image key={image.file_path} src={getImageUrl(image.file_path)} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default MovieImages;
