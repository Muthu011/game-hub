import {
  Button,
  HStack,
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
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(item.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontSize={"large"}
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
  );
};

export default GenreList;
