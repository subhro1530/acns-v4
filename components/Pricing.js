// components/Pricing.js
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
} from "@chakra-ui/react";

const PricingSection = ({
  dividerColor,
  name,
  price,
  pricetag,
  pricetype,
  includes,
}) => {
  return (
    <Box
      p={6}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width={{ base: "80%", md: "40%", lg: "23%" }}
      height={{ base: "90vh", md: "50vh", lg: "90vh" }}
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
        <Text
          fontSize="md"
          opacity="0.6"
          fontWeight="none"
          height="30%"
        >{`${pricetag}`}</Text>
        <Text
          fontSize="sm"
          fontWeight="none"
          height="30%"
        >{`${pricetype}`}</Text>
      </Text>
      <Button
        colorScheme="cyan"
        color="white"
        mb={4}
        borderRadius="0"
        width="100%"
        _hover={{
          backgroundColor: "#00ffff",
          color: "black",
        }}
      >
        Buy Now
      </Button>
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
      name: "Single Event",
      price: "$100",
      pricetag: "per event",
      pricetype: "",
      includes: [
        "Customizable event landing page",
        "Online registration and ticketing",
        "Real-time analytics and reporting",
        "Mobile responsiveness",
        "Social media integration",
      ],
    },
    {
      dividerColor: "cyan",
      name: "Standard",
      price: "$0.50",
      pricetag: "per user per month",
      pricetype: "Billed Annually",
      includes: [
        "Unlimited events per month",
        "Advanced customization options",
        "Attendee engagement tools",
        "Email marketing integration",
        "Access to basic customer support",
      ],
    },
    {
      dividerColor: "darkcyan",
      name: "Standard+",
      price: "$1.00",
      pricetag: "per user per month",
      pricetype: "Billed Annually",
      includes: [
        "All Standard plan features",
        "Priority customer support",
        "Multi-event management",
        "Custom branding and themes",
        "Discounts and promotional tools",
      ],
    },
    {
      dividerColor: "blue",
      name: "Premium",
      price: "Enterprise",
      pricetag: "",
      pricetype: "",
      includes: [
        "All Standard+ plan features",
        "Dedicated account manager",
        "VIP customer support",
        "Advanced analytics and insights",
        "API access for third-party integrations",
      ],
    },
  ];

  return (
    <>
      <Box margin={10} letterSpacing={2} textAlign="center">
        <Heading
          as="h1"
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="300"
          wordwrap="break-word"
        >
          Flexible plans for every
        </Heading>
        <Heading
          as="h1"
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="300"
          wordwrap="break-word"
        >
          stage of your web journey
        </Heading>
      </Box>
      <Flex marginLeft={{ md: "4rem" }} wrap="wrap" justify="center" gap="1rem">
        {sections.map((section, index) => (
          <PricingSection key={index} {...section} />
        ))}
      </Flex>
    </>
  );
};

export default Pricing;
