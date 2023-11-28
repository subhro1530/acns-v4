// HeroSection.js
import { Box, Flex, Heading, Image as ChakraImage } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      bg="#181824"
      color="white"
      h="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="30vh"
    >
      <Flex
        direction={{ base: "column", md: "column" }}
        align=""
        mt={10}
        justify="space-between"
        w="100vw"
        mx="auto"
        pl={{ base: 20, md: 150 }}
      >
        <Box maxW={{ base: "100%", md: "50%" }}>
          <ChakraImage
            src="/full.png"
            alt="Hero Image"
            borderRadius="md"
            w="20%"
            mb="5"
            h="auto"
          />
        </Box>
        <Box maxW={{ base: "100%", md: "50%" }}>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif" // Set font family
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300" // Reduce font weight
            mb={4}
          >
            Branding
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif" // Set font family
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300" // Reduce font weight
            color="gray"
            mb={4}
          >
            Web Design
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif" // Set font family
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="300" // Reduce font weight
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
