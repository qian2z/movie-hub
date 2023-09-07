import { HStack, Icon } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSelector from "./LanguageSelector";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack marginX={3} padding="10px">
      <Icon mr={3} as={RiMovie2Fill} w={10} h={10} />
      <SearchInput />
      <LanguageSelector />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
