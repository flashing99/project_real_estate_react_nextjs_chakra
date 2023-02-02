import {
  Box,
  Text,
  Flex,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MeniItem,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiHomeModern } from "react-icons/hi2";
import { HamburgerIcon } from "@chakra-ui/icons";
import { navigationLinks } from "../../NavigationConsts";

const NavigationMobile = () => {
  return (
    <Box
      color="blue.500"
      p="2rem"
      bg="white"
      display={{ base: "block", md: "none" }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display={"flex"} gap="2" alignItems="center">
            <HiHomeModern size="30px" />
            <Text fontSize={"2xl"} fontWeight="black">
              {" "}
              KASA MOB
            </Text>
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="outline"
            icon={<HamburgerIcon />}
          />
          <MenuList>
           
              {navigationLinks.map((item) => {
                return <NavigationLink key={item.title} {...item} />;
              })}
             
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
       <MenuItem  alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
