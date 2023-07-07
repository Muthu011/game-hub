import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginY={5}>
        Genres
      </Heading>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                src={getCroppedImageUrl(item.image_background)}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize={"large"}
                fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
                variant={"link"}
                onClick={() => {
                  onSelectedGenre(item);
                }}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
