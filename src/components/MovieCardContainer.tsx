import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.2s ease-in"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      {children}
    </Box>
  );
};

export default MovieCardContainer;
