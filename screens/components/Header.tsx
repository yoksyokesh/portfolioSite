import { HStack, Text } from "native-base";
import React from "react";

const Header = () => {
  return (
    <HStack space={{ sm: 2, md: 3, lg: 4 }} justifyContent='flex-end'>
      <Text color={'#000000'}>About</Text>
      <Text color={'#000000'}>Projects</Text>
      <Text color={'#000000'}>Contact me</Text>
    </HStack>
  );
};

export default Header;
