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
            color="#780348" // Updated color
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
              focusBorderColor="#780348" // Updated color
              borderRadius="md"
              _hover={{ borderColor: "#780348" }} // Updated color
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
              focusBorderColor="#780348" // Updated color
              borderRadius="md"
              _hover={{ borderColor: "#780348" }} // Updated color
            />
          </FormControl>

          <HStack justify="space-between" width="100%">
            <Checkbox
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              colorScheme="pink" // Updated color scheme
            >
              Remember me
            </Checkbox>
            <Link color="#780348" href="#">
              Forgot password?
            </Link>
          </HStack>

          <Button
            bg="#780348" // Updated background color
            color="white"
            size="lg"
            width="100%"
            onClick={handleLogin}
            borderRadius="md"
            _hover={{ bg: "#a04160" }} // Lighter shade for hover
            _active={{ bg: "#a04160" }} // Lighter shade for active
          >
            Login
          </Button>

          <Text
            color={useColorModeValue("gray.600", "gray.300")}
            width="100%"
            textAlign="center"
          >
            Don't have an account?{" "}
            <Link color="#780348" href="/register">
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;


