import { Box, Text } from "@chakra-ui/react";
import PropertySlider from "./components/PropertySlider";

const FeaturedProperties = ({ featuredProperties }) => {
  // console.log("FeaturedProperties :" , featuredProperties)
  return (
    <Box bg="blue.50">
      <Box maxW="1280px" m="0 auto" py={{ base: "3rem", sm: "6rem" }}>
        <Text
          fontSize={{ base: "xl", sm:"2xl", md: "3xl" }}
          textAlign="center"
          lineHeight="shorter"
        >
          Discover Our Featured Properties
        </Text>
        <Text
        fontWeight="light"
          fontSize={{ base: "md", sm: "lg", md:"xl" }}
          textAlign="center"
          lineHeight="shorter"
          m="0.85rem"
        >
         A selection of our best properties
        </Text>

         {/* ........ CAROUSSEL ........ */}

      <PropertySlider featuredProperties ={featuredProperties}/>

{/* ................ */}
      </Box>
     
    </Box>
  );
};

export default FeaturedProperties;
