import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: Props) => {
  return (
    <Box minW="450px" minH="950px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default MovieCardContainer;
