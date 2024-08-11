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
      bg={useColorModeValue("gray.50", "gray.800")}
      py={12}
      px={6}
    >
      <Box
        maxW="md"
        width="100%"
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        boxShadow="2xl"
        borderRadius="xl"
      >
        <VStack spacing={6} align="start" width="100%">
          <Heading
            size="lg"
            textAlign="center"
            width="100%"
            color={useColorModeValue("blue.600", "blue.400")}
            fontStyle="italic"
          >
            Login to Coding Site
          </Heading>

          <FormControl id="username" isRequired>
            <FormLabel color={useColorModeValue("gray.700", "gray.300")}>
              Username
            </FormLabel>
            <Input
              type="text"
              value={username}
              fontStyle="italic"
              onChange={(e) => setUsername(e.target.value)}
              bg={useColorModeValue("gray.100", "gray.600")}
              border="1px"
              borderColor={useColorModeValue("gray.300", "gray.500")}
              focusBorderColor="blue.500"
              borderRadius="md"
              _hover={{ borderColor: "blue.400" }}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color={useColorModeValue("gray.700", "gray.300")}>
              Password
            </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg={useColorModeValue("gray.100", "gray.600")}
              border="1px"
              borderColor={useColorModeValue("gray.300", "gray.500")}
              focusBorderColor="blue.500"
              borderRadius="md"
              _hover={{ borderColor: "blue.400" }}
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
            <Link color="blue.500" href="#">
              Forgot password?
            </Link>
          </HStack>

          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleLogin}
            borderRadius="md"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
          >
            Login
          </Button>

          <Text
            color={useColorModeValue("gray.600", "gray.300")}
            width="100%"
            textAlign="center"
          >
            Don't have an account?{" "}
            <Link color="blue.500" href="/register">
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;

