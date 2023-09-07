import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguages, { Language } from "../hooks/useLanguges";

interface Props {
  selectedLanguage?: string;
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector = ({ selectedLanguage, onSelectLanguage }: Props) => {
  const { data } = useLanguages();

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
            onClick={() => onSelectLanguage(language)}
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
