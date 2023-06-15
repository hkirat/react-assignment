import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";

const QuestionListItem = () => {
  return (
    <Flex justifyContent={"center"} gap={"1rem"} alignItems={"center"}>
      <Box as="span">1.</Box>
      <Box as="span">Add Two Numbers</Box>
      <Box as="span" color={"purple.500"}>
        <AiOutlineFileDone />
      </Box>
      <Box as="span">92%</Box>
      <Box color={"yellow.500"} as="span">
        Medium
      </Box>
      <Box as="span">Frequency</Box>
    </Flex>
  );
};

export default QuestionListItem;
