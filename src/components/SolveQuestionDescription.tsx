import { Badge, Box, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SolveQuestionDescription = () => {
  return (
    <GridItem bgColor={"white"} rounded={"md"} shadow={"lg"} p="4">
      <VStack alignItems={"start"} gap={"1rem"}>
        <Text>1232. Check If It Is a Straight Line</Text>
        <Badge colorScheme={"green"}>Easy</Badge>
        <Text fontSize={"sm"}>
          You are given an array coordinates, coordinates[i] = [x, y], where [x,
          y] represents the coordinate of a point. Check if these points make a
          straight line in the XY plane.
        </Text>
        <Box>
          <HStack>
            <Box>Input : </Box>
            <Box>coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]</Box>
          </HStack>
          <HStack>
            <Box>Output : </Box>
            <Box>True</Box>
          </HStack>
        </Box>
      </VStack>
    </GridItem>
  );
};

export default SolveQuestionDescription;
