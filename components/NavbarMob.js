import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  VStack,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
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
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import Image from "next/image";

const NavbarMob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpanded, setExpanded] = useState(false);

  const links = [
    { text: "Home", icon: <FaHome />, href: "/" },
    { text: "About", icon: <FaInfoCircle />, href: "#About" },
    { text: "Works", icon: <FaBriefcase />, href: "#WorkSection" },
    { text: "Services", icon: <FaCogs />, href: "#Services" },
    { text: "Contact", icon: <FaEnvelope />, href: "#Contact" },
  ];

  const socialMediaLinks = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/9674177512",
    },
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

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Box position="fixed" width="100vw" zIndex={100} display={{ base: "block", md: "none" }}>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        bg="#181824"
        color="white"
        p={4}
      >
        <HStack spacing={20} align="center">
          <IconButton
            icon={<FaBars />}
            onClick={handleToggle}
            aria-label="Menu"
            color="white"
            bgColor="transparent"
            _hover={{ color: "gray.600", bgColor: "white" }}
          />
          <ChakraLink ml={3} href="/">
            <Image
              src="/full.png"
              alt="ACNS"
              height={50}
              width={100}
              priority
            />
          </ChakraLink>
        </HStack>
      </Flex>

      <Drawer
        isOpen={isExpanded}
        placement="left"
        onClose={handleToggle}
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
                key={index}
                href={link.href}
                fontFamily="Work Sans, sans-serif"
                padding="10px"
                textDecoration="none"
                fontSize="20px"
                color="white"
                transition=".4s ease-in-out"
                _hover={{ color: "cyan" }}
                target="_blank"
                display="flex"
                alignItems="center" // Align icon and text vertically
              >
                {link.icon} {/* Icon */}
                <span style={{ marginLeft: "8px" }}>{link.text}</span>{" "}
                {/* Text */}
              </ChakraLink>
            ))}
            <HStack spacing={4} mt={20} pl="60px" py={50} width="100%" bgColor="#111119">
              {socialMediaLinks.map((socialMediaLink, index) => (
                <ChakraLink
                  key={index}
                  href={socialMediaLink.href}
                  fontFamily="Work Sans, sans-serif"
                  padding="10px"
                  fontSize="20px"
                  color="white"
                  target="_blank"
                >
                  {socialMediaLink.icon}
                </ChakraLink>
              ))}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarMob;
