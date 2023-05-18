import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack marginX={3}>
      <Img src={logo} boxSize="35px" objectFit="cover" marginY={2}></Img>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
