import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Avatar as ChakraAvatar,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

// Avatar Component
const Avatar = ({ name, src, onImageUpload }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ChakraAvatar name={name} src={src} size="xl" />
      {name && (
        <Text mt={2} fontWeight="bold" fontSize="lg" color="#780348">
          {name}
        </Text>
      )}
      <FormControl mt={4}>
        <FormLabel htmlFor="upload-avatar" fontSize="sm" color="#780348">
          Upload a profile picture
        </FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          id="upload-avatar"
          display="none"
        />
        <Button
          as="label"
          htmlFor="upload-avatar"
          mt={2}
          colorScheme="pink"
          size="md"
          backgroundColor="#780348"
          _hover={{ backgroundColor: "#5e002e" }} // Darker shade for hover
          borderRadius="md"
        >
          Upload Picture
        </Button>
      </FormControl>
    </Box>
  );
};

const BuyPremium = () => {
  const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/150");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.900")} // Background color similar to login page
      p={4}
      fontStyle="italic"
    >
      <Box
        bg="white"
        p={8}
        boxShadow="md"
        borderRadius="md"
        maxW="lg"
        textAlign="center"
        border="1px"
        borderColor="#780348"
        fontStyle="italic"
      >
        <Heading mb={6} fontSize="3xl" fontWeight="bold" color="#780348">
          Buy Premium
        </Heading>
        <Stack spacing={8} align="center">
          <Avatar
            name="Premium User"
            src={imageSrc}
            onImageUpload={handleImageUpload}
          />
          <Box>
            <Heading size="lg" mb={4} fontWeight="bold" color="#780348">
              Unlock Premium Features
            </Heading>
            <Text mb={4} fontSize="lg" color="#780348">
              Upgrade to premium to access exclusive content, advanced features,
              and more!
            </Text>
            <Text mb={6} fontSize="2xl" fontWeight="bold" color="#780348">
              $19.99 per month
            </Text>
            <Button
              colorScheme="pink"
              size="lg"
              backgroundColor="#780348"
              color="white"
              _hover={{ backgroundColor: "#5e002e" }} // Darker shade for hover
              borderRadius="md"
              fontStyle="italic"
            >
              Buy Now
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BuyPremium;
