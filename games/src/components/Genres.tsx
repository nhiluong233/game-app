import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres";
import cropImage from "../service/crop-image";
import GenresSkeleton from "./GenresSkeleton";
interface Props{
    onSelect:(slug: string)=>void;
    selectedGenre: string;
}
const Genres = ({onSelect, selectedGenre}:Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [1,2,3,4,5,6,7,8,9];
  return (
    <>
    {isLoading&&<GenresSkeleton skeletons={skeletons}/>}
    {error&&<Text fontSize={"2xl"}>{error}</Text>}
    <List>
        {data.map(genre=>(
            <HStack paddingY={"5px"} key={genre.id}>
                <Image src={cropImage(genre.image_background)} boxSize={"32px"} borderRadius={"4px"}/>
                <ListItem>
                    <Button fontWeight={genre.slug===selectedGenre ? "bold" : "normal"} variant="link" fontSize={"lg"} onClick={()=>onSelect(genre.slug)}>{genre.name}</Button>
                    </ListItem>)
            
            </HStack>)
        )}
    </List>
    </>
    

  )
}

export default Genres