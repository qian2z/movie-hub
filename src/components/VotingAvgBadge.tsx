import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const VotingAvgBadge = ({ rating }: Props) => {
  const color = rating > 8.0 ? "green" : rating > 6.0 ? "orange" : "blue";

  return (
    <Badge
      ml={1.5}
      mb={1.5}
      colorScheme={color}
      fontSize="16px"
      paddingX={1.5}
      paddingY={0.5}
      borderRadius={4}
    >
      {rating}
    </Badge>
  );
};

export default VotingAvgBadge;
