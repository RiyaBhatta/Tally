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
  VStack,
  useColorModeValue,
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
        border="2px"
        borderColor="#780348" // Updated border color
      >
        <VStack spacing={6} align="start" width="100%">
          <Heading
            size="lg"
            textAlign="center"
            width="100%"
            color="#780348" // Updated color
            fontStyle="italic"
          >
            Create Your Account
          </Heading>

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
            size="lg"
            width="100%"
            onClick={handleSignUp}
            borderRadius="md"
            _hover={{ bg: "#a04160" }} // Lighter shade for hover
            _active={{ bg: "#a04160" }} // Lighter shade for active
          >
            Sign Up
          </Button>

          <Text
            color={useColorModeValue("gray.600", "gray.300")}
            width="100%"
            textAlign="center"
          >
            Already have an account?{" "}
            <Link color="#780348" href="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Register;



