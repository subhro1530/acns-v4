// components/WorkSection.js
import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NextLink from "next/link";
import Link from "next/link";

const WorkMember = ({ name, imageUrl, imageLink }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <Box
      ref={ref}
      position="relative"
      width="100%"
      height="17rem"
      margin="2rem"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      _hover={{
        ".imgBox": {
          transform: "translate(-3.5rem, -3.5rem)",
        },
        ".content": {
          transform: "translate(3.5rem, 3.5rem)",
        },
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="2"
        transition="all 0.5s ease-in-out"
        className="imgBox"
      >
        <Image
          src={imageUrl}
          alt={name}
          width="100%"
          height="100%"
          objectFit="cover"
          resize="both"
          borderRadius="base"
        />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        padding="1.5rem"
        display="flex"
        justifyContent="center"
        backgroundColor="black"
        color="white"
        flexDirection="column"
        alignItems="flex-end"
        textAlign="center"
        transition="0.5s ease-in-out"
        className="content"
        borderRadius="md"
        // _hover={{ zIndex:{base:"5",md:"0"}}} 
      >
        <Heading
          as="h2"
          fontSize="40px"
          pt={5}
          color="cyan"
          fontWeight="500"
          lineHeight="2rem"
          letterSpacing="1px"
          cursor="pointer"
          mt={40}
        >
          {name}
        </Heading>
      </Box>
    </Box>
  );
};

const WorkSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <Box
      ref={ref}
      bg="white"
      p={2}
      mt={4}
      mx="auto"
      maxW="85vw"
      borderRadius="md"
      id="WorkSection"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Section 1: Title */}
      <Heading
        as="h2"
        pl={{ base: "4px", md: "10px" }}
        fontSize={{ base: "2xl", md: "2xl" }}
        mb={{ base: 4, md: 4 }}
        fontWeight={200}
        ml={{ base: "20px", md: "0px" }}
        pr={{ base: "0", md: "30px" }}
        color="black"
      >
        /WORK
      </Heading>
      <Divider
        mb={4}
        color="black"
        opacity="0.6"
        borderColor="unset"
        marginTop="2rem"
      />

      {/* Section 2: Content */}
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        {/* Left side */}
        <Box flex="1">
          <Heading
            as="h3"
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="300"
            mb={4}
          >
            Design Is Emotion
          </Heading>
        </Box>

        {/* Right side */}
        <Box
          flex="1"
          opacity="0.8"
          fontSize="0.95rem"
          letterSpacing="wide"
          lineHeight="1.8rem"
          wordSpacing="10px"
        >
          <Text>
            We believe fervently in the transformative power of emotion within
            design, I approach each project as a canvas for infusing unique
            values and aspirations, curiosity, and trust through the nuanced
            interplay of captivating visuals.
          </Text>
          <Text marginTop="1rem">
            In this strategic approach, I view the design process as a vehicle
            for cultivating authentic brand experiences. The goal is not just to
            craft visually appealing elements but to empower websites and
            graphics with the ability to resonate deeply. From the careful
            selection of colors to the deliberate choice of typography and
            imagery, each component acts as a purposeful emotive tool.
          </Text>
        </Box>
      </Flex>

      {/* Work Members */}
      <Flex
        justify="center"
        align="center"
        p={8}
        flexWrap={{ base: "wrap", md: "unset" }}
      >
        <WorkMember name="Fem Well Care" imageUrl="/femwellcare.png" />

        <WorkMember name="Pangea News" imageUrl="/pangeanews.png" />
      </Flex>
      <Flex
        justify="center"
        align="center"
        p={8}
        flexWrap={{ base: "wrap", md: "unset" }}
      >
        <WorkMember name="NovaSparkle" imageUrl="/novasparkle.png" />
        <WorkMember name="Clima Guard" imageUrl="/climaguard.png" />
      </Flex>
      <Flex
        justify="center"
        align="center"
        p={8}
        flexWrap={{ base: "wrap", md: "unset" }}
      >
        <WorkMember
          name="Bal Adhikar Fun Quest"
          imageUrl="/baladhikarfunquest.png"
        />
        <WorkMember name="Crypto-Expressio" imageUrl="/crypto-expressio.png" />
      </Flex>
    </Box>
  );
};

export default WorkSection;
