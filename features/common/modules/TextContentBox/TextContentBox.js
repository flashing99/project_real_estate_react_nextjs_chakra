import { Box, Divider, Text } from "@chakra-ui/react";

const TextContentBox = ({ title, children }) => {
  return (
    <Box   bg="#FFFFFF" m="1rem" p="1.5rem">
      <Box
        fontWeight={"medium"}
        fontSize="1.2rem"
        color={"gray.600"}
        mb="1.5rem"
      >
        {title}
      </Box>

      <Divider my="0.7rem" />

      <Box>{children}</Box>
    </Box>
  );
};

export default TextContentBox;
