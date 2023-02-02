import { Box } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Box
      maxW="100%"
      bgImage={'url("./images/02.jpg")'}
      bgPos="center"
      bgSize="cover"
      bgAttachment="fixed"      
      minH={{ base: "110vh" , md: "70vh"}}
      pos="relative"
    >

    <Box w="100%"  h="100%" bgColor="blue.900" opacity="0.8" pos="absolute" top="0" 
    
    >

    </Box>

    </Box>
  );
};

export default HeroBanner;
