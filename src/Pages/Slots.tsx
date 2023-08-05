import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Select,
  GridItem,
  Grid,
  SimpleGrid,
  Button
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"

function Slots() {
    const navigate = useNavigate();
  return (
    <div>
      <Box bg={"#F6F6F6"} w="100%" h="100vh">
        <Flex justifyContent={"center"} pt="10%">
          <Flex direction={"column"} bg={"white"} w="50%" h={"60vh"} p="50px">
            <Text as="b" color="black" fontSize={"2xl"} paddingLeft={"0px"}>
              SELECT A TIME
            </Text>
            
              <SimpleGrid columns={4} paddingTop={'50px'} spacingX="40px" spacingY="30px"  >
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='violet' borderRadius={'full'} border='1px' borderColor={'violet'} >03.45pm</Text>
                <Text textAlign={'center'} color='violet' borderRadius={'full'} border='1px' borderColor={'violet'} >03.45pm</Text>
                <Text textAlign={'center'} color='violet' borderRadius={'full'} border='1px' borderColor={'violet'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
                <Text textAlign={'center'} color='tomato' borderRadius={'full'} border='1px' borderColor={'tomato'} >03.45pm</Text>
              </SimpleGrid>
              <Box display={'flex'} justifyContent={'right'} alignItems={'bottom'} paddingTop={'50px'}>
            <Button onClick={()=>navigate('/')} colorScheme='teal' size='md' width={'10%'}   justifyContent={'right'}>Back</Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Slots;
