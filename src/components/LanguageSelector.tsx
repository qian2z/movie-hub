import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguages from "../hooks/useLanguges";

const LanguageSelector = () => {
  const { data, error, isLoading } = useLanguages();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Languages
      </MenuButton>
      <MenuList maxHeight="300px" overflowY="auto">
        {data.map((language) => (
          <MenuItem key={language.iso_639_1}>{language.english_name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
