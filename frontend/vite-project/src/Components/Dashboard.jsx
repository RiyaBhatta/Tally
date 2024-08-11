import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import coding from "../assets/codingimg.jpg"; // Ensure the path and filename are correct
import company from "../assets/Screenshot (371).png";

const questions = {
  easy: ["Easy Question 1", "Easy Question 2", "Easy Question 3"],
  medium: ["Medium Question 1", "Medium Question 2", "Medium Question 3"],
  tough: ["Tough Question 1", "Tough Question 2", "Tough Question 3"],
};

const DSAQuestions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState(questions.easy); // Default to easy questions

  const handleTabChange = (index) => {
    const levels = ["easy", "medium", "tough"];
    setSelectedQuestions(questions[levels[index]]);
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} minH="100vh" p={6}>
      {/* Navigation Bar */}
      <Box
        bg={useColorModeValue("white", "gray.800")}
        borderBottom="1px solid"
        borderColor="gray.200"
        py={4}
        mb={8}
      >
        <Stack direction="row" spacing={4} justify="center">
          <Link to="/">
            <Button
              variant="link"
              color="#780348"
              _hover={{ color: "#a04160" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="link"
              color="#780348"
              _hover={{ color: "#a04160" }}
            >
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="link"
              color="#780348"
              _hover={{ color: "#a04160" }}
            >
              Login
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button
              variant="link"
              color="#780348"
              _hover={{ color: "#a04160" }}
            >
              Dashboard
            </Button>
          </Link>
          <Link to="/buy">
            <Button
              variant="link"
              color="#780348"
              _hover={{ color: "#a04160" }}
            >
              Buy
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* Displaying the images side by side */}
      <Box mb={8}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on smaller screens
          justify="center"
          align="center"
          gap={6} // Adds space between the images
        >
          <Box
            flex="1"
            textAlign="center"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            border="2px solid #780348"
            bg={useColorModeValue("white", "gray.800")}
            mb={{ base: 4, md: 0 }} // Add bottom margin on small screens
          >
            <img
              src={coding}
              alt="Coding Illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "md",
                boxShadow: "lg",
              }}
            />
          </Box>
          <Box
            flex="1"
            textAlign="center"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            border="2px solid #780348"
            bg={useColorModeValue("white", "gray.800")}
          >
            <img
              src={company}
              alt="Company Illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "md",
                boxShadow: "lg",
              }}
            />
          </Box>
        </Flex>
      </Box>

      <Heading mb={8} textAlign="center" color="#780348">
        DSA Questions
      </Heading>

      <Tabs onChange={handleTabChange} variant="enclosed">
        <TabList>
          <Tab color="#780348" _selected={{ color: "#fff", bg: "#780348" }}>
            Easy
          </Tab>
          <Tab color="#780348" _selected={{ color: "#fff", bg: "#780348" }}>
            Medium
          </Tab>
          <Tab color="#780348" _selected={{ color: "#fff", bg: "#780348" }}>
            Tough
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={4}>
              {selectedQuestions.map((question, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Text>{question}</Text>
                </Box>
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={4}>
              {selectedQuestions.map((question, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Text>{question}</Text>
                </Box>
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={4}>
              {selectedQuestions.map((question, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Text>{question}</Text>
                </Box>
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DSAQuestions;



