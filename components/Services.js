// Services.js
import { Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <>
      <Box
        bgColor="cyan"
        pt={20}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
      >
        <Box borderBottom="1px solid black" width="85vw">
          <Box
            pl={{ base: "4px", md: "10px" }}
            fontSize={{ base: "2xl", md: "2xl" }}
            mb={{ base: 4, md: 4 }}
            fontWeight={200}
            ml={{ base: "20px", md: "0px" }}
            pr={{ base: "0", md: "30px" }}
            color="black"
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
          pr={{ base: "0", md: "30px" }}
        >
          Creative Offerings.
        </Heading>

        <Text
          fontSize="lg"
          width={{ base: "", md: "60%" }}
          pr={{ base: "0px", md: "80px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          We take immense pride in offering diverse services that elevate a
          client&apos;s brand to extraordinary heights. <br />
          <br />   With years of experience and industry recognition, our team
          brings creativity, innovation, and strategic thinking to every
          project. From web design to branding, we craft solutions that stand
          out and make a lasting impact.
        </Text>
      </Box>
    </>
  );
};

export default Services;
