// HeroSection.js
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      bg="#181824"
      color="white"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        w="100%"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Box maxW={{ base: "100%", md: "50%" }}>
          <Image
            src="/full.png"
            alt="Hero Image"
            borderRadius="md"
            w="100%"
            h="auto"
          />
        </Box>
        <Box maxW={{ base: "100%", md: "50%" }}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            mb={4}
          >
            Branding
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            color="gray"
            mb={4}
          >
            Web Design
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            color="cyan"
          >
            Graphic Design
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
