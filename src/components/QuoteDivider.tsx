import { Box, Divider, Stack, Text } from "@chakra-ui/react";

interface Props {
  tagline: string;
}

const QuoteDivider = ({ tagline }: Props) => {
  return tagline ? (
    <Stack direction="row" px={4}>
      <Divider orientation="vertical" />
      <Box p={4} borderLeft="4px solid #333" borderRadius="md" boxShadow="md">
        <Text fontSize="18px">{tagline}</Text>
      </Box>
    </Stack>
  ) : null;
};

export default QuoteDivider;
