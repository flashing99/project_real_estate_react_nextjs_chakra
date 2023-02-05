import {
  Heading,
  Text,
  Box,
  Badge,
  Stack,
  Divider,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { usePropertyFormat } from "../../Hooks/usePropertyFormat";
import { TbBed, TbBath, TbRuler } from "react-icons/tb";
import Link from "next/link";

const PropertyCard = (property) => {
  /*   const price = property.price.toLocaleString("en-US",{
    style:"currency",
    currency:"USD",
    maximumFractionDigits:0 
});
  console.log('PRIX::', property.price,' ::: ',price) */
  // console.log('PROPERTY CARD:', property)

  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);

  return (
    <Box mb="4rem" bg="white">
      <Link href={`/properties/${externalID}`}>
        <Box
          bgImage={`url("${coverPhoto}")`}
          height="250px"
          // height={{ base: "100", sm: "250" }}
          bgPos="center center"
          bgSize="cover"
          position="relative"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          <Box m="1rem">
            <Badge colorScheme="green">{purpose}</Badge>
          </Box>

          <Box
            h="50%"
            bgGradient="linear(to-t, #020314E7  , #FFFFFF00 100% )"
            display="flex"
            alignItems="flex-end"
            p="1rem"
          >
            <Text
              fontSize={{ base: "lg", sm: " xl", md: "3xl" }}
              fontWeight="medium"
              textAlign="center"
              color="whiteAlpha.700"
            >
              {price}
            </Text>
          </Box>
        </Box>
        <Box p="1.5rem">
          <Text fontSize="xl" fontWeight="medium" mb="1rem">
            {propertyType}
          </Text>
          <Text fontSize="sm" fontWeight="light" isTruncated>
            {address}
          </Text>
          <Text isTruncated>{title}</Text>
          <HStack spacing="1.3rem" mt="1rem">
            <Flex alignItems="center" gap="0.3rem">
              <TbBed />
              {rooms}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <TbBath />
              {baths}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <TbRuler />
              {sqSize}
              <sup>m2</sup>
            </Flex>
          </HStack>
        </Box>
      </Link>

      {/* <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>  */}
    </Box>
  );
};

export default PropertyCard;
