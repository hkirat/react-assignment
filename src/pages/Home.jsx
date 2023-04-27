import { useState } from "react";
import PropTypes from "prop-types";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const problems1 = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];
const problems2 = [
  {
    title: "Title1",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "Title2",
    difficulty: "Medium",
    acceptanceRate: "65%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];
function Home() {
  const [problems, setProblems] = useState([]);

  return (
    <ChakraProvider>
      <Box minW="100vw" minH="100vh" p={4} bgColor="gray.100">
        <Heading mb={6} textAlign="center" fontSize={["2xl", "3xl", "4xl"]}>
          Problem Solving Platform
        </Heading>

        <VStack
          align="center"
          spacing={6}
          maxW="lg"
          mx="auto"
          p={6}
          bgColor="white"
          borderRadius="md"
          boxShadow="lg"
        >
          <HStack spacing={4}>
            <Button
              colorScheme="teal"
              onClick={() => {
                setProblems(() => problems1);
              }}
            >
              Page 1
            </Button>
            <Button
              colorScheme="teal"
              onClick={() => {
                setProblems(() => problems2);
              }}
            >
              Page 2
            </Button>
          </HStack>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Difficulty</Th>
                <Th>Acceptance Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {problems.map((problem, index) => (
                <ProblemStatement
                  key={index}
                  title={problem.title}
                  difficulty={problem.difficulty}
                  acceptanceRate={problem.acceptanceRate}
                />
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

function ProblemStatement(props) {
  const { title, difficulty, acceptanceRate } = props;

  return (
    <Tr>
      <Td>{title}</Td>
      <Td color={difficulty === "Medium" ? "yellow.400" : "red.500"}>
        {difficulty}
      </Td>
      <Td>{acceptanceRate}</Td>
    </Tr>
  );
}
ProblemStatement.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  acceptanceRate: PropTypes.string.isRequired,
};


export default Home;
