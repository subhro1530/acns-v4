// components/WorkSection.js
import { Box, Divider, Heading, Text, Flex, Image } from "@chakra-ui/react";

const WorkMember = ({ name, imageUrl, imageLink }) => (
  <Box
    position="relative"
    width="30rem"
    height="11rem"
    margin="4rem"
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
      backgroundColor="#fff"
      zIndex="1"
      alignItems="flex-end"
      textAlign="center"
      transition="0.5s ease-in-out"
      className="content"
      boxShadow="3px 1px 2px 2px rgba(189,195,199,0.6)"
      borderRadius="md"
    >
      <Heading
        as="h2"
        fontSize="lg"
        color="#111"
        textShadow="3px 1px 2px rgba(189,195,199,0.6)"
        fontWeight="500"
        lineHeight="2rem"
        letterSpacing="1px"
      >
        {name}
      </Heading>
    </Box>
  </Box>
);

const WorkSection = () => {
  return (
    <Box
      bg="white"
      p={2}
      mt={4}
      mx="auto"
      maxW="1100px"
      boxShadow="lg"
      borderRadius="md"
    >
      {/* Section 1: Title */}
      <Heading
        as="h2"
        fontSize="base"
        mb={2}
        color="grey"
        fontWeight="light"
        letterSpacing="widest"
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
            // wordwrap="break-word"
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

      <Flex justify="center" align="center" p={8}>
        <WorkMember
          name="Bal Adhikar Fun Quest"
          imageUrl="/baladhikarfunquest.png"
        />
        <WorkMember name="Pangea News" imageUrl="/pangeanews.png" />
      </Flex>
      <Flex justify="center" align="center" p={8}>
        <WorkMember name="Clima Guard" imageUrl="/climaguard.png" />
        <WorkMember name="Fem Well Care" imageUrl="/femwellcare.png" />
      </Flex>
      <Flex justify="center" align="center" p={8}>
        <WorkMember name="Crypto-Expressio" imageUrl="/crypto-expressio.png" />
        <WorkMember name="NovaSparkle" imageUrl="/novasparkle.png" />
      </Flex>
    </Box>
  );
};

export default WorkSection;
