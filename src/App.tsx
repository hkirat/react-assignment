import { Box, ChakraProvider, HStack, Text, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import SolveQuestion from "./components/SolveQuestion";
import QuestionListing from "./components/QuestionListing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack p={4} maxH={'4rem'} justifyContent={'end'} >
      <ColorModeSwitcher />
    </HStack>
    <QuestionListing />
    {/* <SolveQuestion /> */}
  </ChakraProvider>
);
