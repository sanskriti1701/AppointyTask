import React from 'react'
import { Box, Text, Center, Flex, Select,GridItem,Grid } from "@chakra-ui/react";

function SelectPitch(props) {
  return (
    <div>
        <Flex alignItems={'center'} _hover={{'bg':'red.100'}}  p='20px' paddingLeft={'100px'} margin={'px'}>
            <Box bg={props.iconcolor} h='100%' w='10%' color={'white'} p='5px' borderRadius={'10px'} fontSize={'2xl'} fontWeight={'20px'}>P1</Box>
            <Flex px='20px' direction={'column'} ><Text as='b' fontSize={'xl'}>{props.icon}
            Pitch {props.num}
            </Text>
            <Box paddingLeft={'20px'}>40 m Online</Box>
            </Flex>
        </Flex> 
    </div>
  )
}

export default SelectPitch