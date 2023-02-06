import { Box, Text, Flex ,Avatar} from "@chakra-ui/react";
import MemberTeamCard from "./components/MemberTeamCard";
import { teamMembers } from "./teamConsts";

const MeetTheTeam = () => {
  return (
    <Box maxW="1280px" m="0 auto" _bg="red.50" py={{ base: "2rem", sm: "4rem" }}>
      <Text
        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
        textAlign="center"
        lineHeight="shorter"
      >
        Meet Th Team
      </Text>
      <Text
        fontWeight="light"
        fontSize={{ base: "md", sm: "lg", md: "xl" }}
        textAlign="center"
        lineHeight="shorter"
        m="0.85rem"
      >
        The best in the industry, at your service 24/7
      </Text>

      {/* ........ CAROUSSEL ........ */}
      <Flex
        m ={{ base: "3rem", sm:"1.5rem",  md: "2rem" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between "
        gap="1.5rem"
        mt="4rem"
      >
        {teamMembers.map((member) => {
             
          return   <MemberTeamCard key={member.name} {...member} />
        }    )}
      </Flex>

      {/* ................ */}
    </Box>
  );
};

export default MeetTheTeam;
