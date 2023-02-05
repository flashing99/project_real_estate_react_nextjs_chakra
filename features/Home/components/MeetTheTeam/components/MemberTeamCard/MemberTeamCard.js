import { Box, Text, Flex, Avatar } from "@chakra-ui/react";


//const MemberTeamCard = (member) => {
  //  console.log(member);
const MemberTeamCard = ({name, title,image,description, }) => {
  

  return (
    <Box
      bg="#f1f1f1a4"
      p="2rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb={{ base:"1rem",sm:"0" }}
      borderRadius="md"
      shadow="md"
      flexDirection= "column" 
      textAlign="center"
    >
      {/* <Avatar size="2xl" name={member.name} src={member.image} /> */}
      <Avatar size="2xl" name={name} src={image} mb="1rem" />
      <Text fontSize="xl" fontWeight="bold" textAlign="center" lineHeight="shorter"  color="blue.800">{name}</Text>
      <Text fontSize="lg" fontWeight="normal" textAlign="center" lineHeight="shorter" mb="1rem" color="blue.500" >{title}</Text>
      <Text fontSize="md" fontWeight="light" noOfLines="3 " color="gray.600" >{description}</Text>
    </Box>
  );
};

export default MemberTeamCard;
