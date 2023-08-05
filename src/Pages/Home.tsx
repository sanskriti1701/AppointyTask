import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Select,
  GridItem,
  Grid,
  Button,
} from "@chakra-ui/react";
import SelectPitch from "../components/SelectPitch";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Box bg={"#F6F6F6"} w="100%" h="100vh">
      <Flex justifyContent={"center"} pt="10%">
        <Box bg={"white"} w="50%" h={"60vh"} p="50px">
          <Text as="b" color="black" fontSize={"3xl"} paddingLeft={"0px"}>
            SELECT APPOINTMENT TYPE
          </Text>
          <SelectPitch icon={""} num={1} iconcolor="orange" />
          <SelectPitch icon={""} num={2} iconcolor="red" />
          <SelectPitch icon={""} num={3} iconcolor="blue" />
          <Box
          display={"flex"}
          justifyContent={"right"}
          alignItems={"bottom"}
          paddingTop={"0px"}
        >
          <Button
            onClick={() => navigate("/selectdate")}
            colorScheme="teal"
            size="md"
            width={"10%"}
            justifyContent={"right"}
          >
            Next
          </Button>
        </Box>
        </Box>
        
      </Flex>
    </Box>
  );
}

export default Home;
