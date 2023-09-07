import { Badge } from "@chakra-ui/react";

interface Props {
  date: string;
}

const DateBadge = ({ date }: Props) => {
  const year = parseInt(date.substring(0, 4));
  const currentYear = new Date().getFullYear();

  const color =
    year === currentYear ? "green" : year > currentYear ? "red" : "purple";

  return (
    <Badge
      ml={5}
      mb={1.5}
      colorScheme={color}
      fontSize="20px"
      paddingX={1.5}
      paddingY={0.5}
      borderRadius={4}
      variant="outline"
    >
      {date}
    </Badge>
  );
};

export default DateBadge;
