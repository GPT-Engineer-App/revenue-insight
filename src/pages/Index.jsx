import { Container, VStack, Stat, StatLabel, StatNumber, StatGroup, Box, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Business Dashboard
        </Heading>
        <StatGroup>
          <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
            <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
              <FaDollarSign />
            </IconContext.Provider>
            <StatLabel>Sales</StatLabel>
            <StatNumber>1,500</StatNumber>
          </Stat>
          <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
            <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
              <FaShoppingCart />
            </IconContext.Provider>
            <StatLabel>Transactions</StatLabel>
            <StatNumber>320</StatNumber>
          </Stat>
          <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
            <IconContext.Provider value={{ size: "25px", className: "global-class-name" }}>
              <FaUsers />
            </IconContext.Provider>
            <StatLabel>New Customers</StatLabel>
            <StatNumber>45</StatNumber>
          </Stat>
        </StatGroup>
      </VStack>
    </Container>
  );
};

export default Index;
