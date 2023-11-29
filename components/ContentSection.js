// ContentSection.js
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ContentSection = () => {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleButtonClick = () => {
    // Navigate to the services page
    router.push("/services");
  };

  return (
    <Box
      ref={ref}
      position="relative"
      bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://wallpaperaccess.com/full/283173.jpg') center/cover"
      color="white"
      h="100vh"
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-start"
      pl={{ base: 4, md: 40 }}
      zIndex={-6}
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
            href="/services"
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