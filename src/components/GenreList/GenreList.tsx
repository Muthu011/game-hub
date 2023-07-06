import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

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
            <Text fontSize={"large"}>{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
