import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card width="100%" height="100%" variant="filled">
      <Skeleton height="72%" />
      <CardBody>
        <SkeletonText height="28%" />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
