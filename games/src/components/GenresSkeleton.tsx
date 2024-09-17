import { List, ListItem, SkeletonText } from '@chakra-ui/react'

interface Props{
    skeletons: number[];
}

const GenresSkeleton = ({skeletons}: Props) => {
  return (
    <List>
        {skeletons.map(s=><ListItem key={s} paddingY="10px"><SkeletonText/></ListItem>)}
    </List>
  )
}

export default GenresSkeleton