// ContentSection.js
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ContentSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif') center/cover"
      color="white"
      h={{ base: "70vh", md: "100vh" }}
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-start"
      pl={{ base: 4, md: 40 }}
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "auto",
      }}
    >
      <Flex
        direction="column"
        align="flex-start"
        mb={{ base: 8, md: 16 }}
        maxW={{ md: "600px", lg: "800px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="200"
            mb={4}
          >
            Branding makes a Brand
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text fontSize="xl" fontWeight={200} color="cyan" mb={4}>
            We provide and cover you with all the branding stuff, including
            interactive and dynamic websites and logos, since we care about your
            choice.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="#Contact"
            style={{
              display: "flex",
              alignItems: "center",
              background: "cyan",
              color: "white",
              borderRadius: "999px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <FaArrowRight
              fontSize="20px"
              color="#010004"
              style={{ marginLeft: "5px" }}
            />
          </Link>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default ContentSection;
