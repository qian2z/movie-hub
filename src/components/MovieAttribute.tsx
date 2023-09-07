import { SimpleGrid, Text } from "@chakra-ui/react";
import Movie from "../entities/Movie";
import useMovieQueryStore from "../store";
import DateBadge from "./DateBadge";
import DefinitionItem from "./DefinitionItem";

interface Props {
  movie: Movie;
}

const MovieAttribute = ({ movie }: Props) => {
  const selectedLanguage = useMovieQueryStore((m) => m.movieQuery.language_iso);

  const releaseDate = selectedLanguage === "en" ? "Release Date" : "发行时间";
  const duration = selectedLanguage === "en" ? "Duration" : "片长";
  const genres = selectedLanguage === "en" ? "Genres" : "题材";
  const spokenLanguages =
    selectedLanguage === "en" ? "Spoken Language(s)" : "语言";
  const production_companies =
    selectedLanguage === "en" ? "Production Companies" : "出品方";
  const production_countries =
    selectedLanguage === "en" ? "Production Countries" : "产地";

  return (
    <>
      <SimpleGrid columns={1} as="dl">
        <DefinitionItem term={releaseDate}>
          <DateBadge date={movie.release_date} />
        </DefinitionItem>
        <DefinitionItem term={duration}>
          <Text>
            {movie.runtime}
            {selectedLanguage === "en" ? " Minutes" : " 分钟"}
          </Text>
        </DefinitionItem>
        <DefinitionItem term={genres}>
          {movie.genres?.map((genre) => (
            <Text key={genre?.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term={spokenLanguages}>
          {movie.spoken_languages.map((language) => (
            <Text key={language.iso_639_1}>{language.name}</Text>
          ))}
        </DefinitionItem>
        {movie.production_companies && (
          <DefinitionItem term={production_companies}>
            {movie.production_companies?.map((company) => (
              <Text key={company.id}>{company.name}</Text>
            ))}
          </DefinitionItem>
        )}
        <DefinitionItem term={production_countries}>
          {movie.production_countries?.map((country) => (
            <Text key={country.iso_3166_1}>{country.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default MovieAttribute;
