import { HStack, Icon } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";
import { MovieQuery } from "../App";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSelector from "./LanguageSelector";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchedText: string) => void;
  movieQuery: MovieQuery;
  setMovieQuery: React.Dispatch<React.SetStateAction<MovieQuery>>;
}

const NavBar = ({ onSearch, movieQuery, setMovieQuery }: Props) => {
  return (
    <HStack marginX={3} padding="10px">
      <Icon mr={3} as={RiMovie2Fill} w={10} h={10} />
      <SearchInput onSearch={onSearch} />
      <LanguageSelector
        selectedLanguage={movieQuery.language_iso}
        onSelectLanguage={(language) =>
          setMovieQuery({ ...movieQuery, language_iso: language.iso_639_1 })
        }
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
