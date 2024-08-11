import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Questions Solved",
        data: [10, 20, 15, 30, 25, 35],
        backgroundColor: "rgba(120, 3, 72, 0.6)", // Dark pink
        borderColor: "rgba(120, 3, 72, 1)", // Dark pink
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#780348", // Dark pink
        },
      },
      title: {
        display: true,
        text: "Questions Solved Over Time",
        color: "#780348", // Dark pink
      },
    },
  };

  return (
    <Box minH="100vh" p={6} bg={useColorModeValue("gray.50", "gray.800")}>
      <Heading mb={8} textAlign="center" color="#780348">
        {" "}
        {/* Dark pink */}
        Dashboard
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        <GridItem>
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            border="1px"
            borderColor="#780348" // Dark pink
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: "#a04160", // Lighter pink
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color="#780348" // Dark pink
              >
                Total Questions Solved
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color="#780348" // Dark pink
              >
                150
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                12% increase from last month
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            border="1px"
            borderColor="#780348" // Dark pink
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: "#a04160", // Lighter pink
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color="#780348" // Dark pink
              >
                Current Streak
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color="#780348" // Dark pink
              >
                7 Days
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />1 day longer than last week
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            border="1px"
            borderColor="#780348" // Dark pink
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: "#a04160", // Lighter pink
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color="#780348" // Dark pink
              >
                Total Points
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color="#780348" // Dark pink
              >
                1200
              </StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                5% decrease from last month
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            border="1px"
            borderColor="#780348" // Dark pink
          >
            <Heading size="md" mb={4} textAlign="center" color="#780348">
              {" "}
              {/* Dark pink */}
              Questions Solved Over Time
            </Heading>
            <Bar data={data} options={options} />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;


