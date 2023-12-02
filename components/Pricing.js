import {
  Box,
  Text,
  Button,
  VStack,
  List,
  ListItem,
  Flex,
  Divider,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PricingSection = ({
  dividerColor,
  name,
  price,
  pricetag,
  pricetype,
  includes,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true);
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to the QRPay page
      router.push("/qrpay");
    }, 1500);
  };

  return (
    <Box
      p={6}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width={{ base: "80%", md: "40%", lg: "23%" }}
      height={{ base: "95vh", md: "50vh", lg: "85vh" }}
      mx={{ base: "auto", md: 0 }}
      my={4}
      transition="ease-in-out 0.7s all"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Divider borderColor={dividerColor} borderWidth={3} mb={4} />
      <Text fontSize="2xl" fontWeight="700" mb={7}>
        {name}
      </Text>
      <Text fontSize="4xl" fontWeight="bolder" mb={2} height="100px">
        {`${price}`}
        <Text fontSize="md" opacity="0.6" fontWeight="none" height="30%">
          {`${pricetag}`}
        </Text>
        <Text fontSize="sm" fontWeight="none" height="30%">
          {`${pricetype}`}
        </Text>
      </Text>
      {isLoading ? (
        <Spinner color="cyan" />
      ) : (
        <Button
          colorScheme="cyan"
          color="white"
          mb={4}
          borderRadius="0"
          width="100%"
          onClick={handleBuyNow}
          _hover={{
            backgroundColor: "#00ffff",
            color: "black",
          }}
        >
          Buy Now
        </Button>
      )}
      <Text fontSize="md" fontWeight="bold" height="3rem">
        Includes:
      </Text>
      <List styleType="square" color="cyan">
        {includes.map((item, index) => (
          <ListItem key={index} transition="color 0.3s">
            <Text color="black" _hover={{ color: "blue.500" }}>
              {item}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Pricing = () => {
  const sections = [
    {
      dividerColor: "lightblue",
      name: "Basic Web Presence",
      price: "₹3999",
      pricetag: "one-time",
      pricetype: "",
      includes: [
        "Responsive and Customizable Website",
        "Basic Logo Design",
        "Up to 5 Pages",
        "Delivery in 14 days",
      ],
    },
    {
      dividerColor: "cyan",
      name: "Standard Web Package",
      price: "₹5999",
      pricetag: "one-time",
      pricetype: "",
      includes: [
        "Full-Featured Website",
        "Creative Logo and Branding",
        "Up to 10 Pages",
        "Delivery in 10 days",
        "Exclusive Coupon for Future Services",
      ],
    },
    {
      dividerColor: "darkcyan",
      name: "Premium Web and Graphics",
      price: "₹7999",
      pricetag: "one-time",
      pricetype: "",
      includes: [
        "Premium Website with Advanced Features",
        "Unique Logo Design and Branding",
        "Up to 15 Pages",
        "Delivery in 7 days",
        "Exclusive Coupon for Future Services",
        "Custom Coupon Card for Next Purchase",
      ],
    },
    {
      dividerColor: "blue",
      name: "Enterprise Package",
      price: "₹9999",
      pricetag: "one-time",
      pricetype: "",
      includes: [
        "Comprehensive Web Development",
        "Highly Creative Logo and Branding",
        "Unlimited Pages",
        "Delivery in 5 days",
        "VIP Customer Support",
        "Advanced Analytics and Insights",
        "API Access for Third-Party Integrations",
        "Custom Coupon Card for Next Purchase",
      ],
    },
  ];

  return (
    <>
      <Box margin={10} letterSpacing={2} textAlign="center">
        <Heading
          as="h1"
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "2xl", md: "6xl" }}
          fontWeight="300"
          wordwrap="break-word"
        >
          Flexible Plans for You!
        </Heading>
        <Box>(Be in contact with us for present deals)</Box>
      </Box>
      <Flex marginLeft={{ md: "5rem" }} wrap="wrap" justify="center" gap="1rem">
        {sections.map((section, index) => (
          <PricingSection key={index} {...section} />
        ))}
      </Flex>
    </>
  );
};

export default Pricing;
