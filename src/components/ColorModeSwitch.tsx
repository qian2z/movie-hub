import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import useMovieQueryStore from "../store";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const language_iso = useMovieQueryStore((m) => m.movieQuery.language_iso);

  return (
    <HStack>
      <Switch
        ml={3}
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">
        {language_iso === "en" ? "Dark Mode" : "深色模式"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
