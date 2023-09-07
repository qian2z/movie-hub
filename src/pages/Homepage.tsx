import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" marginX={3}>
        <MovieHeading />
        <Flex flexWrap="wrap" padding={2.5}>
          <SortSelector />
        </Flex>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
