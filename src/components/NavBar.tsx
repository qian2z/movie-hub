import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack marginX={3} padding="10px">
      <Img src={logo} boxSize="45px" objectFit="cover" marginY={2}></Img>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
