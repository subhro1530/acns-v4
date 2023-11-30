// Services.js
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => {
  return (
    <>
      <Box
        bgColor="cyan"
        pt={20}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        id="Services"
      >
        <Box borderBottom="1px solid black" width="85vw">
          <Box
            pl={{ base: "4px", md: "10px" }}
            fontSize={{ base: "1xl", md: "1xl" }}
            mb={{ base: 4, md: 4 }}
            fontWeight={200}
            ml={{ base: "20px", md: "0px" }}
            pr={{ base: "0", md: "30px" }}
            color="black"
            letterSpacing={1}
          >
            /SERVICES
          </Box>
        </Box>
      </Box>
      <Box
        bg="cyan"
        color="black"
        p={8}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Heading
          as="h1"
          pl={{ base: "2px", md: "80px" }}
          fontSize={{ base: "6xl", md: "8xl" }}
          mb={{ base: 4, md: 0 }}
          fontWeight={200}
          mr={20}
          pr={{ base: "0", md: "30px" }}
          width={{ base: "sm", md: "lg" }}
          overflowWrap={{ base: "break-word", md: "unset" }}
        >
          Creative Offerings.
        </Heading>

        <VStack align="left">
          <Text
            fontSize="lg"
            width={{ base: "", md: "80%" }}
            pr={{ base: "0px", md: "10px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            We take immense pride in offering diverse services that elevate a
            client&apos;s brand to extraordinary heights. <br />
            <br /> With years of experience and industry recognition, our team
            brings creativity, innovation, and strategic thinking to every
            project. From web design to branding, we craft solutions that stand
            out and make a lasting impact.
          </Text>
          <Text
            pl={{ base: "4px", md: "10px" }}
            fontSize={{ base: "1xl", md: "1xl" }}
            mb={{ base: 4, md: 4 }}
            fontWeight={200}
            mt={20}
            ml={{ base: "10px", md: "-10px" }}
            pr={{ base: "0", md: "30px" }}
            color="black"
            letterSpacing={1}
          >
            /SERVICES
          </Text>
          <Box fontSize={25} fontWeight={200}>
            <Text mt={5}>User Interface Design (UI)</Text>
            <Text mt={5}>Web Design</Text>
            <Text mt={5}>Website Development</Text>
            <Text mt={5}>Graphic Design</Text>
            <Text mt={5}>Illustration</Text>
            <Text mt={5}>Poster Design</Text>
            <Text mt={5}>Brand Promotion</Text>
            <Text mt={5}>SEO</Text>
            <Text mt={5}>Portfolio Website</Text>
            <Text mt={5}>Startup Websites</Text>
            <Text mt={5}>Social Media Posts</Text>
            <Text mt={5}>Banner Design</Text>
            <Text mt={5}>Advertisement Poster</Text>
            <Text mt={5}>Business Cards</Text>
            <Text mt={5}>Digital Cards</Text>
            <Text mt={5} mb={10}>
              Digital Ceremony Cards
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Services;
