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
      width={{ base: "40rem", md: "100%" }}
      height={{ base: "10rem", md: "17rem" }}
      margin={{ base: "1rem", md: "2rem" }}
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
          width={{ base: "100%", md: "100%" }}
          height={{ base: "10rem", md: "100%" }}
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
        backgroundColor="cyan"
        color="white"
        flexDirection="column"
        alignItems="flex-end"
        textAlign="center"
        transition="0.5s ease-in-out"
        className="content"
        borderRadius="md"
      >
        <Heading
          position={{ base: "absolute" }}
          bottom={{ base: "28px", md: "10px" }}
          left={{ base: "20px", md: "5px" }}
          as="h2"
          fontSize={{ base: "20px", md: "40px" }}
          pt={5}
          color="#181824"
          fontWeight="500"
          lineHeight="2rem"
          letterSpacing="1px"
          cursor="pointer"
          mt={40}
          _hover={{ color: "white", textShadow: "3px 1px 2px black" }}
        >
          <Link href={imageLink} target="_blank">
            {name}
          </Link>
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
      <Box borderBottom="1px solid black" width="85vw" margin={4}>
        <Box
          as="h1"
          mt={20}
          fontSize="1xl"
          mb={4}
          color="black.200"
          fontWeight={200}
          letterSpacing={1}
        >
          /WORK
        </Box>
      </Box>

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
        p={{ base: "0", md: "8" }}
        flexWrap={{ base: "wrap", md: "unset" }}
        width={{ base: "80vw", md: "90vw" }}
      >
        <WorkMember
          name="FEMWELLCARE"
          imageUrl="/femwellcare.png"
          imageLink="https://femwellcare.vercel.app/"
        />

        <WorkMember
          name="PANGEA NEWS"
          imageUrl="/pangeanews.png"
          imageLink="https://pangeanews.vercel.app/"
        />
      </Flex>
      <Flex
        justify="center"
        align="center"
        p={{ base: "0", md: "8" }}
        flexWrap={{ base: "wrap", md: "unset" }}
        width={{ base: "80vw", md: "90vw" }}
      >
        <WorkMember
          name="NOVA SPARKLE"
          imageUrl="/novasparkle.png"
          imageLink="https://nova-sparkle-music.vercel.app/"
        />
        <WorkMember
          name="CLIMAGUARD"
          imageUrl="/climaguard.png"
          imageLink="https://climaguard.vercel.app/"
        />
      </Flex>
      <Flex
        justify="center"
        align="center"
        p={{ base: "0", md: "8" }}
        flexWrap={{ base: "wrap", md: "unset" }}
        width={{ base: "80vw", md: "90vw" }}
      >
        <WorkMember
          name="BAL ADHIKAR FUNQUEST"
          imageUrl="/baladhikarfunquest.png"
          imageLink="https://bal-adhikar-funquest.vercel.app/"
        />
        <WorkMember
          name="CRYPTO EXPRESSIO"
          imageUrl="/crypto-expressio.png"
          imageLink="https://crypto-expressio.web.app/"
        />
      </Flex>
      <Box align="center" fontSize={25} color="black" mt={20} mb={20}>
        And many more...
      </Box>
    </Box>
  );
};

export default WorkSection;
