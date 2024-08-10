import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    // Further logic, such as sending data to a server, goes here
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Box
        maxW="md"
        width="100%"
        bg="white"
        p={8}
        boxShadow="lg"
        borderRadius="md"
      >
        <Heading mb={6}>Sign Up</Heading>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="blue" onClick={handleSignUp}>
            Sign Up
          </Button>

          <Text mt={4}>
            Already have an account?{" "}
            <Link color="blue.500" href="#">
              Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
