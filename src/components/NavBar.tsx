import { Box, HStack, Icon } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import NavDrawer from "./NavDrawer";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack marginX={3} padding="10px">
      <Link to="/">
        <Icon mt={2} as={RiMovie2Fill} w={10} h={10} />
      </Link>
      <SearchInput />
      <Box display={{ base: "none", lg: "flex" }} flexDirection="row">
        <LanguageSwitch />
        <ColorModeSwitch />
      </Box>
      <NavDrawer />
    </HStack>
  );
};

export default NavBar;
