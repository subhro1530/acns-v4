// components/PayThroughPayPal.js

import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const PayThroughPayPal = () => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
    //   border="1px solid #ccc"
    //   borderRadius="lg"
    //   boxShadow="md"
      my={10}
    >
          <Box mb={4}>
              <Box textAlign="center">or</Box>
        <Heading as="h2" size="2xl" mt={10} fontWeight="300" mb={5}>
          Pay Through PayPal
        </Heading>
        <Text fontSize="md" textAlign="center" color="gray.600">
          Secure international payments with PayPal.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="xl" textAlign="left" fontWeight="bold" mb={2}>
          Why Choose PayPal?
        </Text>
        <ul>
          <li>Safe and secure transactions</li>
          <li>Buyer protection and refunds</li>
          <li>Accepted worldwide</li>
        </ul>
      </Box>
      <Button
        colorScheme="blue"
              size="lg"
              mt={5}
        rightIcon={<ArrowForwardIcon />}
        onClick={handleCheckout}
      >
        Pay with PayPal
      </Button>
    </Flex>
  );
};

export default PayThroughPayPal;
