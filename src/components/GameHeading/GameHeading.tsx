import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const HeadingString = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {HeadingString}
    </Heading>
  );
};

export default GameHeading;
