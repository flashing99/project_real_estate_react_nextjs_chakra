import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../../NavigationConsts";

// import {Box} from '@chakra-ui/react'
const NavigationDesktop = () => {
  return (
    <Box
      color="blue.500"
      py="2rem"
      bg="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxW="1280px" m="0 auto" >
        {/* ................ */}
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems={"center"}>
              <HiHomeModern size="30px" />
              <Text fontSize="2xl" fontWeight="black">
                KASA
              </Text>
            </Box>
          </Link>
          {/* ................ */}
          <Flex alignItems="center" fontWeight="medium" gap="12">
            {navigationLinks.map((item) => {
              return <NavigationLink key={item.title} {...item} />;
            })}

            <Button
              p="1.5rem"
              fontSize="0.8rem"
              fontWeight={"medium"}
              colorScheme="twitter"
            >
              CREATE LISTING
            </Button>
          </Flex>

          {/* ................ */}
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  // console.log({ title, link, icon });
  return (
    <Link href={link}>
      <Flex alignItems={"center"} gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
