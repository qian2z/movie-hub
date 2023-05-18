import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchedText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack marginX={3} padding="10px">
      <Img src={logo} boxSize="45px" objectFit="cover" marginY={2}></Img>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
