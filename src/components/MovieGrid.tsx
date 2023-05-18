import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
        marginRight={8}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer>
              <MovieCardSkeleton key={skeleton} />
            </MovieCardContainer>
          ))}
        {movies.map((movie) => (
          <MovieCardContainer>
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
