import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "../PlatformIcon/PlatformIcon";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIcon
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />

          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
