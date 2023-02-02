import { Box, Grid, GridItem, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import { about, ourOffices, services, workWithUs } from "./FooterConsts";
import { HiHomeModern } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <Box bg="blue.600" color="white">
        <Box
          maxW="1280px"
          py="3rem"
          px={{ base: "2rem", sm: "0" }}
          m={"0 auto"}
        >
          <SimpleGrid
            column="4"
            minChildWidth="150px"
            color="whiteAlpha.700"
            gap="1.7rem"
          >
            <Flex flexDir="column">
              {/*  */}
              <FooterHeader name={"About"} />
              {/*  */}
              {about.map((item) => {
                return <FooterLink key={item.name} {...item} />;
              })}
            </Flex>

            <Flex flexDir="column">
              {/*  */}
              <FooterHeader name={"Our Offices"} />
              {/*  */}
              {ourOffices.map((item) => {
                return <FooterLink key={item.name} {...item} />;
              })}
            </Flex>

            <Flex flexDir="column">
              {/*  */}
              <FooterHeader name={"Services"} />
              {/*  */}
              {services.map((item) => {
                return <FooterLink key={item.name} {...item} />;
              })}
            </Flex>

            <Flex flexDir="column">
              {/*  */}
              <FooterHeader name={"Work With Us"} />
              {/*  */}
              {workWithUs.map((item) => {
                return <FooterLink key={item.name} {...item} />;
              })}
            </Flex>
          </SimpleGrid>

          {/*  */}
        </Box>
      </Box>
      <FooterCopy />
    </>
  );
};

export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link as={NextLink} href={link}>
        {name}
      </Link>
    </Text>
  );
};

const FooterHeader = ({ name }) => {
  return (
    <Text as={"h4"} fontWeight={"light"} fontSize="xl" mb="1rem">
      {name}
    </Text>
  );
};

const FooterCopy = () => {
  return (
    <Box
      bg="blue.900"
      display="flex"
      p="2rem"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      color="white"
    >
      <Box display="flex" alignItems="center"  gap="2" >
        <HiHomeModern /> 
        <Text fontSize="lg" fontWeight="black" >CASAZ</Text>
      </Box>
      <Text mt="0.5rem" fontSize="xs" textAlign="center" >
        All rights reserved - Copyright CASAZ
      </Text>

    </Box>
  );
};
