import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import MovieHeading from "./components/MovieHeading";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Language } from "./hooks/useLanguges";

export interface MovieQuery {
  genre: Genre | null;
  language: Language | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem mt={3} area="nav">
        <NavBar
          onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
          movieQuery={movieQuery}
          setMovieQuery={setMovieQuery}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={10}>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" marginX={3}>
        <MovieHeading
          movieQuery={movieQuery}
          onClear={() => {
            setMovieQuery({} as MovieQuery);
          }}
        />
        <Flex flexWrap="wrap" padding={2.5}>
          <SortSelector
            selectedSort={movieQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setMovieQuery({ ...movieQuery, sortOrder })
            }
          />
        </Flex>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
