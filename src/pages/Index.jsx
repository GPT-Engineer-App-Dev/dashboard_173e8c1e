import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, SimpleGrid } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <SimpleGrid columns={[1, null, 2]} spacing={8} mb={12}>
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Total Customers</StatLabel>
          <StatNumber>45,602</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            1.36%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, 3]} spacing={8} mb={12}>
        <Box bg="white" p={6} boxShadow="md" rounded="md">
          <Flex align="center" mb={4}>
            <FaChartLine size={24} />
            <Heading as="h2" size="md" ml={2}>
              Sales Trend
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnR8ZW58MHx8fHwxNzEyNjAxMTM2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales trend chart" />
        </Box>

        <Box bg="white" p={6} boxShadow="md" rounded="md">
          <Flex align="center" mb={4}>
            <FaChartPie size={24} />
            <Heading as="h2" size="md" ml={2}>
              Revenue Breakdown
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydHxlbnwwfHx8fDE3MTI2MDExMzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue breakdown chart" />
        </Box>

        <Box bg="white" p={6} boxShadow="md" rounded="md">
          <Flex align="center" mb={4}>
            <FaChartBar size={24} />
            <Heading as="h2" size="md" ml={2}>
              Product Performance
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1577563682708-4f022ec774fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydHxlbnwwfHx8fDE3MTI2MDExMzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product performance chart" />
        </Box>
      </SimpleGrid>

      <Box bg="white" p={6} boxShadow="md" rounded="md">
        <Flex align="center" mb={4}>
          <FaUsers size={24} />
          <Heading as="h2" size="md" ml={2}>
            Recent Customers
          </Heading>
        </Flex>
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjUzNTkwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 1" rounded="full" mb={2} />
            <Text fontWeight="bold">John Doe</Text>
            <Text fontSize="sm" color="gray.500">
              Software Engineer
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjUzNTkwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 2" rounded="full" mb={2} />
            <Text fontWeight="bold">Jane Smith</Text>
            <Text fontSize="sm" color="gray.500">
              Marketing Manager
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjUzNTkwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 3" rounded="full" mb={2} />
            <Text fontWeight="bold">Mike Johnson</Text>
            <Text fontSize="sm" color="gray.500">
              Sales Representative
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjUzNTkwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer 4" rounded="full" mb={2} />
            <Text fontWeight="bold">Emily Davis</Text>
            <Text fontSize="sm" color="gray.500">
              Product Designer
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;
