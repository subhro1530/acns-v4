// HeroSection.js
import { Box, Flex, Heading, Image as ChakraImage } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      bg="#111119"
      color="white"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: "10vh", md: "50vh" }} // Adjusted padding for smaller screens
      pb="5vw"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w="100%"
        maxW={{ md: "1200px" }}
        mx="auto"
        pl={{ base: 4, md: 4 }}
      >
        <Box
          width="80%"
          maxW={{ base: "100%", md: "50%" }}
          mb={{ base: 6, md: 0 }} // Adjust margin for smaller screens
        >
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="300"
            wordWrap="break-word" // Allow word wrapping
          >
            Branding
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="300"
            color="gray"
            wordWrap="break-word"
          >
            Web Design
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="300"
            color="cyan"
            wordWrap="break-word"
            width={{ base: "auto", md: "800px" }}
          >
            Graphics Design
          </Heading>
        </Box>

        <Box maxW={{ base: "80%", md: "40%" }}>
          <ChakraImage
            src="https://advanceonline.com.au/wp-content/uploads/2019/10/website-designer-sydney-1024x1024.png"
            alt="Hero Image"
            borderRadius="md"
            mt={{base:"0px",md:"-400px"}}
            w="90%"
            h="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
