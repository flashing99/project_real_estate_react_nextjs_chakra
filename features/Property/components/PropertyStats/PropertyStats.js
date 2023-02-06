
import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { TbBath, TbBed, TbRuler } from "react-icons/tb";

const PropertyStats = ({ rooms, baths, price, sqSize }) => {
    console.log({price})
  return (
    <Box mb="1rem" p="1.5rem" bg={"#FFFFFF"}>
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        fontSize="xl"
        fontWeight="light"
        gap={"1rem"}
        color={"gray.500"}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Flex flexDir={"column"} justifyContent="center">
          <Text>BEDS</Text>
          <Flex alignItems={"center"} gap="0.5rem">
            <TbBed />
            {rooms}
          </Flex>
        </Flex>

        <Center h={"50px"}>
        <Divider  orientation="vertical"/>
        </Center>

        
        <Flex flexDir={"column"} justifyContent="center">
          <Text>BATHS</Text>
          <Flex alignItems={"center"} gap="0.5rem">
            <TbBath />
            {baths}
          </Flex>
        </Flex>

        <Center h={"50px"}>
        <Divider  orientation="vertical"/>
        </Center>       
        
        <Flex flexDir={"column"} justifyContent="center">
          <Text>SIZE</Text>
          <Flex alignItems={"center"} gap="0.5rem">
            <TbRuler />
            {sqSize}
          </Flex>
        </Flex>

        <Center h={"50px"}>
        <Divider  orientation="vertical"/>
        </Center>       
        
        <Flex flexDir={"column"} justifyContent="center">
          <Text>PRICE</Text>
          <Flex alignItems={"center"} gap="0.5rem">
             
            {price}
          </Flex>
        </Flex>

       

        
          



      </Flex>
    </Box>
  );
};

export default PropertyStats;
