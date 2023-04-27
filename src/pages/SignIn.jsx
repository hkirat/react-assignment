import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
function SignIn() {
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
          <HStack w="100%">
            <FormControl>
              <Input placeholder="Email" type="email" />
            </FormControl>
            <FormControl>
              <Input placeholder="Password" type="password" />
            </FormControl>
            <Button colorScheme="blue">Log In</Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider >
  );
}

export default SignIn;
