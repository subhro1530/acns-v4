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
  Button,
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
  FaArrowRight,
  FaWhatsapp,
  FaBlog,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { text: "Home", icon: <FaHome />, href: "/" },
    { text: "About", icon: <FaInfoCircle />, href: "#About" },
    { text: "Works", icon: <FaBriefcase />, href: "#WorkSection" },
    { text: "Services", icon: <FaCogs />, href: "#Services" },
    { text: "Contact", icon: <FaEnvelope />, href: "#Contact" },
    // { text: "Blog", icon: <FaBlog />, href: "/blog" },
  ];

  const socialMediaLinks = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/9433211591",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/company/91105676",
    },
    {
      icon: <FaGoogle />,
      href: "mailto:acodernamedsubhro@gmail.com",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC7M2V6WGxompzcrD2vXfybw",
    },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: isLargerThan768 ? 0 : "-100%" }}
      transition={{ duration: 0.6 }}
      style={{
        position: isLargerThan768 ? "fixed" : "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        backgroundColor: "#181824",
        color: "white",
        width: isLargerThan768 ? "6vw" : "100%",
      }}
    >
      <Flex direction="column" align="center">
        <ChakraLink marginTop="7vh" marginBottom="7vh" href="/">
          <Image
            src="/icon.png"
            alt="ACNS"
            height={60}
            width={60}
            priority
          ></Image>
        </ChakraLink>

        {isLargerThan768 ? (
          <>
            <IconButton
              icon={<FaBars />}
              aria-label="Menu"
              color="white"
              border="none"
              backgroundColor="transparent"
              height="26vh"
              width="100%"
              cursor="pointer"
              onClick={handleDrawerToggle}
              transition=".4s ease-in-out"
              _hover={{ backgroundColor: "transparent", color: "cyan" }}
              marginBottom="50px"
              fontSize="25px"
            />
          </>
        ) : (
          <>
            <Button
              onClick={handleDrawerToggle}
              position="fixed"
              left="5%"
              top="5%"
              zIndex="1"
              bgColor="black"
              color="white"
              borderRadius="5px"
              paddingX="4"
              display={{ base: "flex", md: "none" }}
              alignItems="center"
              justifyContent="space-around"
            >
              Open Navbar <FaArrowRight />
            </Button>
          </>
        )}

        <VStack
          backgroundColor="rgb(0,0,0,.3)"
          paddingTop="30px"
          paddingBottom="30px"
          width="100%"
        >
          {socialMediaLinks.map((socialMediaLink, index) => (
            <ChakraLink
              key={index}
              href={socialMediaLink.href}
              fontFamily="Work Sans, sans-serif"
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
          <DrawerHeader></DrawerHeader>
          <DrawerBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding="40px 0px"
          >
            {links.map((link, index) => (
              <ChakraLink
                fontFamily="Work Sans, sans-serif"
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
