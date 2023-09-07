import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import LanguageSwitch from "./LanguageSwitch";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  return (
    <Box display={{ base: "flex", lg: "none" }}>
      <IconButton
        icon={<GiHamburgerMenu />}
        aria-label={"more"}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              marginX={5}
              marginTop={5}
              alignItems="center"
            >
              <LanguageSwitch />
              <ColorModeSwitch />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              onClick={() => {
                onClose(), navigate("/");
              }}
            >
              <GenreList />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
