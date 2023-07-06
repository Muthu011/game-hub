import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "../PlatformIcon/PlatformIcon";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcon platform={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCards;