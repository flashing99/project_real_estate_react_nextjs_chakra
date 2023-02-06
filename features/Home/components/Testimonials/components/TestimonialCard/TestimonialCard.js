import {
    Icon,
    Box,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Flex,
    SimpleGrid,
    Avatar,
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
import { TbQuote } from "react-icons/tb";


const TestimonialCard = (testimonial) => {
  return (
    <Box
      bg="#FFFFFF"
      display="flex"
      padding="3rem"
      flexDir="column"
      mb={{ base: "1rem", sm: "0" }}
      borderRadius={"md"}
      shadow={"md"}
    >
      <Box>
        <Icon as={TbQuote} w={8} h={8} color="blue.500" />
      </Box>
      <Text fontSize={"md"} color="gray.500" my="1.8rem">
        {testimonial.testimonial}
      </Text>
      <Flex gap={"1rem"} alignItems="center">
        <Avatar src={testimonial.image} />
        <Box>
          By <Text as="span">{testimonial.name}</Text>
          <Text
            fontSize={"md"}
            fontStyle="initial"
            fontWeight="light"
            color="gray.500"
          >             
            Company - {testimonial.company}
          </Text>
        </Box>
      </Flex>
    </Box>

    /*  <Card variant="elevated" size="md" pb="1rem" key="testimonial">
              <CardHeader p="2rem 1rem 0rem">          
                <Icon as={TbQuote} w={8} h={8} color="blue.500" />
              </CardHeader>

              <CardBody fontSize="0.95rem" lineHeight="tall" color="gray.800">{testimonial.testimonial}</CardBody>
             
              <CardFooter justifyContent="center" alignItems="flex-end">
                <Avatar name="Dan Abrahmov" src={testimonial.image} />
                <Box display="flex" flexDir="column" ml="1rem">
                  <Text fontSize="sm" fontWeight="bold">                    
                    By {testimonial.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">                    
                    Company {testimonial.company}
                  </Text>
                </Box>
              </CardFooter>
            </Card> */
  );
};

export default TestimonialCard;
