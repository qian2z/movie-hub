import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem mt={3} area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={10}>
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
}

export default App;
