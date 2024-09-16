import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImage from "../service/crop-image";

interface Props{
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow={"hidden"}>
        <Image src={cropImage(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
            <PlatformIcons platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard