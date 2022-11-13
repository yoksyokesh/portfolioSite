import { HStack, Text, Button, Icon, useBreakpointValue } from "native-base";
import React from "react";

const Header = () => {
  const isLargeScreen = useBreakpointValue({ sm: false, md: true });
  console.log(isLargeScreen)

  return (
    <HStack
      space={{ sm: 2, md: 3, lg: 4 }}
      justifyContent="space-between"
      alignItems={"center"}
      p={{ sm: 5 }}
    >
      <Text>
        Y<Text>okesh</Text>
      </Text>
      <HStack space={{ sm: 2, md: 3, lg: 4 }} alignItems="center">
        <Text color={"#B4BFDE"}>About</Text>
        <Text color={"#B4BFDE"}>Projects</Text>
        <Text color={"#B4BFDE"}>Contact me</Text>
        <Button _text={{color: '#63FBD7'}} bgColor='#0A192F' borderColor={'#63FBD7'} borderWidth={1.5}>Resume</Button>
      </HStack>
    </HStack>
  );
};

export default Header;
