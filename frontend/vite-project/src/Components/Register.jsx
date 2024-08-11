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
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/login");
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, #3B82F6, #60A5FA, #93C5FD)"
      padding="10px"
    >
      <Box
        maxW="md"
        width="100%"
        bg="white"
        p={10}
        boxShadow="2xl"
        borderRadius="xl"
        border="2px"
        borderColor="gray.200"
      >
        <Heading mb={8} textAlign="center" color="blue.500" fontSize="2xl">
          Create Your Account
        </Heading>
        <Stack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel color="blue.600">Email Address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              bg="blue.50"
              border="1px"
              borderColor="blue.300"
              _hover={{ borderColor: "blue.500" }}
              _focus={{
                borderColor: "blue.600",
                boxShadow: "0 0 0 1px blue.600",
              }}
              fontStyle="italic"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color="blue.600">Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              bg="blue.50"
              border="1px"
              borderColor="blue.300"
              _hover={{ borderColor: "blue.500" }}
              _focus={{
                borderColor: "blue.600",
                boxShadow: "0 0 0 1px blue.600",
              }}
              fontStyle="italic"
            />
          </FormControl>

          <FormControl id="confirmPassword" isRequired>
            <FormLabel color="blue.600">Confirm Password</FormLabel>
            <Input
              fontStyle="italic"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              bg="blue.50"
              border="1px"
              borderColor="blue.300"
              _hover={{ borderColor: "blue.500" }}
              _focus={{
                borderColor: "blue.600",
                boxShadow: "0 0 0 1px blue.600",
              }}
            />
          </FormControl>

          <Button
            colorScheme="blue"
            onClick={handleSignUp}
            width="full"
            mt={6}
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            size="lg"
            fontStyle="italic"
          >
            Sign Up
          </Button>

          <Text mt={6} textAlign="center" color="blue.600" fontStyle="italic">
            Already have an account?{" "}
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;

