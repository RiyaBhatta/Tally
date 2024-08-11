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
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Questions Solved Over Time",
      },
    },
  };

  return (
    <Box minH="100vh" p={6} bg={useColorModeValue("gray.50", "gray.800")}>
      <Heading mb={8} textAlign="center">
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
            borderColor={useColorModeValue("gray.200", "gray.700")}
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: useColorModeValue("gray.300", "gray.600"),
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                Total Questions Solved
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color={useColorModeValue("blue.600", "blue.300")}
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
            borderColor={useColorModeValue("gray.200", "gray.700")}
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: useColorModeValue("gray.300", "gray.600"),
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                Current Streak
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color={useColorModeValue("green.600", "green.300")}
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
            borderColor={useColorModeValue("gray.200", "gray.700")}
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              borderColor: useColorModeValue("gray.300", "gray.600"),
            }}
          >
            <Stat>
              <StatLabel
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                Total Points
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                color={useColorModeValue("red.600", "red.300")}
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
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Heading size="md" mb={4} textAlign="center">
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

