import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import SolveQuestionCompiler from "./SolveQuestionCompiler";
import SolveQuestionDescription from "./SolveQuestionDescription";

const SolveQuestion = () => {
  return (
    <Box bgColor={'gray.100'} maxW={"100vw"} p="4">
      <Grid gap={'1rem'} h="calc(100vh - 2rem)" p="4" gridTemplateColumns={"repeat(2,1fr)"}>
        <SolveQuestionDescription />
        <SolveQuestionCompiler />
      </Grid>
    </Box>
  );
};

export default SolveQuestion;
