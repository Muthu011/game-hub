import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"20px"}>
      <Image boxSize={"60px"} src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
