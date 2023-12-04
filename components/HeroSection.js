import { Box, Flex, Heading, Image as ChakraImage } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      bg="#111119"
      color="white"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: "20vh", md: "50vh" }}
      pb="5vw"
    >
      <Flex
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w="100%"
        maxW={{ md: "1200px" }}
        mx="auto"
        pl={{ base: 0, md: 4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          width="80%"
          maxW={{ base: "100%", md: "50%" }}
          mb={{ base: 6, md: 0 }}
        >
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "40px", md: "8xl" }}
            fontWeight="300"
            wordwrap="break-word"
          >
            Branding
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "40px", md: "8xl" }}
            fontWeight="300"
            color="gray"
            wordwrap="break-word"
          >
            Web Design
          </Heading>
          <Heading
            as="h1"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "40px", md: "8xl" }}
            fontWeight="300"
            color="cyan"
            wordwrap="break-word"
            width={{ base: "auto", md: "800px" }}
          >
            Graphics Design
          </Heading>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          maxW={{ base: "80%", md: "40%" }}
        >
          <ChakraImage
            src="https://advanceonline.com.au/wp-content/uploads/2019/10/website-designer-sydney-1024x1024.png"
            alt="Hero Image"
            borderRadius="md"
            mt={{ base: "0px", md: "-400px" }}
            w="90%"
            h="auto"
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default HeroSection;
