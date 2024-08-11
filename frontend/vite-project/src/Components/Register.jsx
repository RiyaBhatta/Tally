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
      bgGradient="linear(to-r, #780348, #a04160)" // Updated gradient
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
        borderColor="#780348" // Updated border color
      >
        <Heading mb={8} textAlign="center" color="#780348" fontSize="2xl">
          Create Your Account
        </Heading>
        <Stack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel color="#780348">Email Address</FormLabel>{" "}
            {/* Updated color */}
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              bg="#fef2f3" // Light pink background
              border="1px"
              borderColor="#780348" // Updated border color
              _hover={{ borderColor: "#a04160" }} // Updated hover border color
              _focus={{
                borderColor: "#a04160", // Updated focus border color
                boxShadow: "0 0 0 1px #a04160", // Updated focus box shadow color
              }}
              fontStyle="italic"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color="#780348">Password</FormLabel>{" "}
            {/* Updated color */}
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              bg="#fef2f3" // Light pink background
              border="1px"
              borderColor="#780348" // Updated border color
              _hover={{ borderColor: "#a04160" }} // Updated hover border color
              _focus={{
                borderColor: "#a04160", // Updated focus border color
                boxShadow: "0 0 0 1px #a04160", // Updated focus box shadow color
              }}
              fontStyle="italic"
            />
          </FormControl>

          <FormControl id="confirmPassword" isRequired>
            <FormLabel color="#780348">Confirm Password</FormLabel>{" "}
            {/* Updated color */}
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              bg="#fef2f3" // Light pink background
              border="1px"
              borderColor="#780348" // Updated border color
              _hover={{ borderColor: "#a04160" }} // Updated hover border color
              _focus={{
                borderColor: "#a04160", // Updated focus border color
                boxShadow: "0 0 0 1px #a04160", // Updated focus box shadow color
              }}
              fontStyle="italic"
            />
          </FormControl>

          <Button
            bg="#780348" // Updated background color
            color="white"
            onClick={handleSignUp}
            width="full"
            mt={6}
            _hover={{ bg: "#a04160" }} // Lighter shade for hover
            _active={{ bg: "#a04160" }} // Lighter shade for active
            size="lg"
            fontStyle="italic"
          >
            Sign Up
          </Button>

          <Text mt={6} textAlign="center" color="#780348" fontStyle="italic">
            Already have an account?{" "}
            <Link color="#a04160" href="/login">
              {" "}
              {/* Updated color */}
              Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;


