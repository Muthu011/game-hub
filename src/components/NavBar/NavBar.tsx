import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"20px"}>
      <Image boxSize={"60px"} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
