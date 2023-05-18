import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack marginX={3} justifyContent="space-between" padding="10px">
      <Img src={logo} boxSize="45px" objectFit="cover" marginY={2}></Img>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
