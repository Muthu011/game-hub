import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCards from "../GameCards/GameCards";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCards/GameCardContainer";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 89, 9];

  if (isLoading) {
    return (
      <>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={3}
          padding={10}
        >
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </>
    );
  }

  return (
    <>
      {error && <span>{error}</span>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={10}
      >
        {data.map((game, index) => (
          <GameCardContainer key={game.id + index}>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
