import { Box, Text, Flex, Avatar, Image, SimpleGrid } from "@chakra-ui/react";
import { partners, partners2 } from "./partnersConsts";
const Partners = () => {
  return (
    <Box maxW="1280px" m="0 auto"  _py={{ base: "2rem", sm: "4rem" }} >
    
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          textAlign="center"
          lineHeight="shorter"
        >
          Our Partners
        </Text>

        <SimpleGrid column={partners.length}  minChildWidth="150px" m="0 auto" spacing='40px'   > 

          {/* {partners.map((partner) => { */}
          {partners2.map((partner) => {
            return (
              <Image
                key={partner}
                src={partner}
                alt={partner}
                alignSelf="center"
                filter="grayscale(1)"
                opacity="0.8"
                width="16rem"
              />
            );
          })}
        </SimpleGrid>
     

      {/* <Box maxW="1280px" m="0 auto" py={{ base: "3rem", sm: "6rem" }}>
    
    </Box> */}
    </Box>
  );
};

export default Partners;
