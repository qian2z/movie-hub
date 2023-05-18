import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card
      width="433px"
      height="auto"
      borderRadius={10}
      overflowY="hidden"
      variant="filled"
    >
      <Skeleton height="650px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
