import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import LanguageSelector from "./components/LanguageSelector";
import { Language } from "./hooks/useLanguges";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={10}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelectLanguage={(language) => setSelectedLanguage(language)}
        />
        <MovieGrid
          selectedGenre={selectedGenre}
          selectedLanguage={selectedLanguage}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
