// components/Navbar.js

import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaLinkedin,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  // Check if the screen width is larger than 768px
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  // State for controlling the Drawer (sidebar) open/close
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Navigation links for the sidebar
  const links = [
    { text: "Home", icon: <FaHome />, href: "/" },
    { text: "About", icon: <FaInfoCircle />, href: "/about" },
    { text: "Works", icon: <FaBriefcase />, href: "/works" },
    { text: "Services", icon: <FaCogs />, href: "/services" },
    { text: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];

  // Social media links
  const socialMediaLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/shaswata-saha-74b209251/",
    },
    {
      icon: <FaGoogle />,
      href: "mailto:shaswata.ssaha@gmail.com",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC7M2V6WGxompzcrD2vXfybw",
    },
  ];

  // Toggle the Drawer open/close state
  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: isLargerThan768 ? 0 : "-100%" }}
      transition={{ duration: 0.6 }}
      style={{
        position: isLargerThan768 ? "fixed" : "fixed", // Adjusted position for mobile
        left: 0,
        top: 0,
        height: "100vh",
        backgroundColor: "#181824",
        color: "white",
        width: isLargerThan768 ? "6vw" : "100%", // Adjusted width for mobile
      }}
    >
      {/* Flex container for the main content */}
      <Flex direction="column" align="center">
        {/* Logo */}
        <ChakraLink marginTop="7vh" marginBottom="7vh" href="/">
          <Image
            src="/icon.png"
            alt="ACNS"
            height={60}
            width={60}
            priority
          ></Image>
        </ChakraLink>

        {/* Bars Icon */}
        <IconButton
          icon={<FaBars />}
          aria-label="Menu"
          color="white"
          border="none"
          backgroundColor="transparent"
          height="34vh"
          width="100%"
          cursor="pointer"
          onClick={handleDrawerToggle}
          transition=".4s ease-in-out"
          _hover={{ backgroundColor: "transparent", color: "cyan" }}
          marginBottom="50px"
          fontSize="25px" // Increase size slightly
        />

        {/* Social Media Icons */}
        <VStack
          backgroundColor="rgb(0,0,0,.3)"
          paddingTop="20px"
          paddingBottom="20px"
          width="100%"
        >
          {socialMediaLinks.map((socialMediaLink, index) => (
            <ChakraLink
              key={index}
              href={socialMediaLink.href}
              color="white"
              fontSize="22px"
              padding="5px"
              marginTop="10px"
              transition=".4s ease-in-out"
              target="blank"
              _hover={{ color: "cyan" }}
            >
              {socialMediaLink.icon}
            </ChakraLink>
          ))}
        </VStack>
        <Box backgroundColor="cyan" height="15vh" color="cyan" width="100%">
          H
        </Box>
      </Flex>

      {/* Sidebar Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={handleDrawerToggle}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="#181824" color="white">
          <DrawerCloseButton
            color="white"
            fontSize="20px"
            transition=".4s ease-in-out"
            backgroundColor="transparent"
            border="none"
            padding="20px"
            cursor="pointer"
            _hover={{ color: "cyan" }}
          />
          <DrawerBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding="40px 0px"
          >
            {/* Links in the sidebar */}
            {links.map((link, index) => (
              <ChakraLink
                fontFamily="Work-Sans"
                padding="10px 0px"
                textDecoration="none"
                key={index}
                href={link.href}
                display="flex"
                alignItems="center"
                fontSize="20px"
                gap="4"
                color="white"
                transition=".4s ease-in-out"
                _hover={{ color: "cyan" }}
              >
                {link.icon} {link.text}
              </ChakraLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
