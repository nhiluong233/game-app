import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres";
import cropImage from "../service/crop-image";
import GenresSkeleton from "./GenresSkeleton";

const Genres = () => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1,2,3,4,5,6,7,8,9];
  return (
    <>
    {isLoading&&<GenresSkeleton skeletons={skeletons}/>}
    {error&&<Text fontSize={"2xl"}>{error}</Text>}
    <List>
        {data.map(genre=>(
            <HStack paddingY={"5px"}>
                <Image src={cropImage(genre.image_background)} boxSize={"32px"} borderRadius={"4px"}/>
                <ListItem key={genre.id}>
                    <Text fontSize={"lg"}>{genre.name}</Text>
                    </ListItem>)
            
            </HStack>)
        )}
    </List>
    </>
    

  )
}

export default Genres