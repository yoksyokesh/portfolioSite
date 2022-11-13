import React from "react";
import { HStack,Text,Button, Stack } from "native-base";

const HeaderContent = () => {
  return (<Stack space={{ base: 2, md: 3, lg: 4 }} alignItems="center" direction={{base:'column',md:'row'}}>
  <Text color={"#B4BFDE"}>About</Text>
  <Text color={"#B4BFDE"}>Projects</Text>
  <Text color={"#B4BFDE"}>Contact me</Text>
  <Button
    _text={{ color: "#63FBD7" }}
    bgColor="#0A192F"
    borderColor={"#63FBD7"}
    borderWidth={1.5}
  >
    Resume
  </Button>
</Stack>);
};

export default HeaderContent;
