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
} from "@chakra-ui/react";

// Avatar Component
const Avatar = ({ name, src, onImageUpload }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ChakraAvatar name={name} src={src} size="xl" />
      {name && (
        <Text mt={2} color="#780348">
          {name}
        </Text>
      )}
      <Input
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        mt={4}
        display="none"
        id="upload-avatar"
      />
      <Button
        as="label"
        htmlFor="upload-avatar"
        mt={2}
        colorScheme="pink"
        size="sm"
        backgroundColor="#780348"
        _hover={{ backgroundColor: "#5e002e" }} // Darker shade for hover
      >
        Upload Picture
      </Button>
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
      bg="#f9f9f9" // Light background color
      p={4}
    >
      <Heading mb={6} color="#780348">
        Buy Premium
      </Heading>
      <Stack spacing={8} align="center">
        <Avatar
          name="Premium User"
          src={imageSrc}
          onImageUpload={handleImageUpload}
        />
        <Box
          bg="white"
          p={8}
          boxShadow="md"
          borderRadius="md"
          maxW="lg"
          textAlign="center"
        >
          <Heading size="lg" mb={4} color="#780348">
            Unlock Premium Features
          </Heading>
          <Text mb={4} color="#780348">
            Upgrade to premium to access exclusive content, advanced features,
            and more!
          </Text>
          <Text mb={6} fontSize="xl" fontWeight="bold" color="#780348">
            $19.99 per month
          </Text>
          <Button
            colorScheme="pink"
            size="lg"
            backgroundColor="#780348"
            color="white"
            _hover={{ backgroundColor: "#5e002e" }} // Darker shade for hover
          >
            Buy Now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default BuyPremium;
