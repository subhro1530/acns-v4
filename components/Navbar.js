// components/Navbar.js

import { Box, Flex, IconButton, Link, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: isLargerThan768 ? 0 : "-100%" }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        backgroundColor: "#181824",
        color: "white",
        padding: "1rem",
      }}
    >
      <Flex direction="column" align="center">
        {/* Logo */}
        <Link href="/">
          <Image src="/Half-logo.png" height={30} width={30}></Image>
        </Link>

        {/* Bars Icon */}
        <IconButton
          icon={<FaBars />}
          aria-label="Menu"
          variant="outline"
          color="white"
          onClick={() => console.log("Toggle menu")}
          marginBottom="auto"
        />

        {/* Social Media Icons */}
        <Box marginTop="auto">
          {/* Add your social media icons here */}
          {/* Example: */}
          <Box marginRight="1rem" display="inline-block">
            <a href="#" style={{ color: "white" }}>
              {/* Your social media icon */}
            </a>
          </Box>
          {/* Add more social media icons as needed */}
        </Box>
      </Flex>
    </motion.nav>
  );
};

export default Navbar;
