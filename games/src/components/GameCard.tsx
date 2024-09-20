import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImage from "../service/crop-image";
import Emojis from "./Emojis";

interface Props{
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={cropImage(game.background_image)}/>
        <CardBody>
            <HStack justifyContent={"space-between"}>
            <PlatformIcons platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl' marginTop={2}>{game.name}<Emojis rating_top={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard