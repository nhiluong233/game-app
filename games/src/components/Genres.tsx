import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImage from "../service/crop-image";
import GenresSkeleton from "./GenresSkeleton";
interface Props {
  onSelect: (genre: Genre | null) => void;
  selectedGenre?: number;
}
const Genres = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {isLoading && <GenresSkeleton skeletons={skeletons} />}
      {error && <Text fontSize={"2xl"}>{error.message}</Text>}
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <HStack paddingY={"5px"} key={genre.id}>
            <Image
              src={cropImage(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"4px"}
              objectFit={"cover"}
            />
            <ListItem>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                variant="link"
                fontSize={"lg"}
                onClick={() => onSelect(genre)}
              >
                {genre.name}
              </Button>
            </ListItem>
            )
          </HStack>
        ))}
      </List>
    </>
  );
};

export default Genres;
