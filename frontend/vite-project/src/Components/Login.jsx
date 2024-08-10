import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={12} // Added padding top and bottom for consistent spacing
      bg={useColorModeValue("#137D9E", "#137D9E")}
    >
      <Box
        maxW="md"
        width="100%"
        bg={useColorModeValue("white", "#ccc")}
        p={8}
        boxShadow="lg"
        borderRadius="lg"
        mt={-20} // Added negative margin to pull the box closer to the top
      >
        <VStack spacing={6} align="start">
          <Heading size="lg" color={useColorModeValue("#137D9E", "#137D9E")}>
            Login to Coding Site
          </Heading>

          <FormControl id="username">
            <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
              Username
            </FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              bg={useColorModeValue("gray.100", "gray.600")}
              border="none"
              focusBorderColor="blue.500"
              borderRadius="md"
              _hover={{ bg: useColorModeValue("gray.200", "gray.500") }}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
              Password
            </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg={useColorModeValue("gray.100", "gray.600")}
              border="none"
              focusBorderColor="blue.500"
              borderRadius="md"
              _hover={{ bg: useColorModeValue("gray.200", "gray.500") }}
            />
          </FormControl>

          <HStack justify="space-between" width="100%">
            <Checkbox
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              colorScheme="blue"
            >
              Remember me
            </Checkbox>
            <Link color="#137D9E" href="#">
              Forgot password?
            </Link>
          </HStack>

          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleLogin}
            borderRadius="md"
          >
            Login
          </Button>

          <Text color={useColorModeValue("gray.600", "gray.300")} mt={4}>
            Don't have an account?{" "}
            <Link color="#137D9E" href="/signin">
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;
