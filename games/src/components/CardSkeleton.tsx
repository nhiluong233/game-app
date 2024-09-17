import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Skeleton height='200px' />
        <CardBody>
          <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default CardSkeleton;