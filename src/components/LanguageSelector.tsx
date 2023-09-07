import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguages from "../hooks/useLanguges";
import useMovieQueryStore from "../store";

const LanguageSelector = () => {
  const { data } = useLanguages();
  const selectedLanguage = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const setSelectedLanguage = useMovieQueryStore((m) => m.setLanguage);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _focus={{ boxShadow: "outline" }}
      >
        {selectedLanguage?.toUpperCase() || "EN"}
      </MenuButton>
      <MenuList>
        {data.map((language) => (
          <MenuItem
            onClick={() => setSelectedLanguage(language.iso_639_1)}
            key={language.iso_639_1}
          >
            {language.iso_639_1.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
