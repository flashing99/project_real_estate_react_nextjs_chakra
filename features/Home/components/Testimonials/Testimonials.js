import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import TestimonialCard from "./components/TestimonialCard";

import { testimonials } from "./testimonialConsts";
const Testimonials = () => {
  return (
    <Box bg="gray.50">
      <Box
        maxW="1280px"
        m="0 auto"
        py={{ base: "2rem", sm: "4rem" }}
        // px={{ base: "1rem", sm: "2rem" }}
      >
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          textAlign="center"
          lineHeight="shorter"
        >
          Testimonials
        </Text>
        <Text
          fontWeight="light"
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          textAlign="center"
          lineHeight="shorter"
          m="0.85rem"
        >
          here's what our valued clients have to say
        </Text>

        <SimpleGrid
          column={3}
          minChildWidth="300px"
          gap={{ base: "0.5rem", sm: "2rem", md: "2.5rem" }}
        >
          {testimonials.map((testimonial) => {
            return <TestimonialCard  key={testimonial.name} {...testimonial}/>;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
