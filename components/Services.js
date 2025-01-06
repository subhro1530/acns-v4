import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import {
  FaDesktop,
  FaPaintBrush,
  FaCode,
  FaChartLine,
  FaGlobe,
  FaImage,
  FaUsers,
  FaRocket,
  FaRegHandshake,
  FaBusinessTime,
} from "react-icons/fa"; // Add any other icons you may need

const ServiceCard = ({ logo, title, description }) => {
  return (
    <Box
      borderRadius="md"
      border="1px solid #ddd"
      p={6}
      bg="white"
      boxShadow="md"
      textAlign="center"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Icon as={logo} boxSize={16} mb={4} color="cyan.500" />
      <Heading as="h3" size="lg" mb={3}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Services = () => {
  return (
    <>
      <Box
        bgColor="cyan"
        pt={20}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        id="Services"
        pl="10vw"
        pb={4}
        pr={4}
        borderRadius="md"
      >
        <Box borderBottom="1px solid black" width="85vw">
          <Box
            as="h1"
            mt={20}
            fontSize="1xl"
            mb={4}
            color="black.200"
            fontWeight={200}
            letterSpacing={1}
          >
            /SERVICES
          </Box>
        </Box>
      </Box>
      <Box
        bg="cyan"
        color="black"
        p={8}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Heading
          as="h1"
          pl={{ base: "2px", md: "80px" }}
          fontSize={{ base: "6xl", md: "8xl" }}
          mb={{ base: 4, md: 0 }}
          fontWeight={200}
          mr={20}
          pr={{ base: "0", md: "30px" }}
          width={{ base: "sm", md: "lg" }}
          overflowWrap={{ base: "break-word", md: "unset" }}
        >
          Creative Offerings.
        </Heading>

        <VStack align="left">
          <Text
            fontSize="lg"
            width={{ base: "", md: "80%" }}
            pr={{ base: "0px", md: "10px" }}
            textAlign={{ base: "left", md: "left" }}
          >
            We take immense pride in offering diverse services that elevate a
            client&apos;s brand to extraordinary heights. <br />
            <br /> With years of experience and industry recognition, our team
            brings creativity, innovation, and strategic thinking to every
            project. From web design to branding, we craft solutions that stand
            out and make a lasting impact.
          </Text>
          <Text
            pl={{ base: "4px", md: "10px" }}
            fontSize={{ base: "1xl", md: "1xl" }}
            mb={{ base: 4, md: 4 }}
            fontWeight={200}
            mt={20}
            ml={{ base: "10px", md: "-10px" }}
            pr={{ base: "0", md: "30px" }}
            color="black"
            letterSpacing={1}
          >
            /SERVICES
          </Text>
        </VStack>
      </Box>

      <Box bg="cyan" p={10}>
        <Grid
          bg="cyan"
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          ml={{md:"70px"}}
        >
          <GridItem>
            <ServiceCard
              logo={FaDesktop}
              title="User Interface Design (UI)"
              description="Creating visually appealing and user-friendly interfaces that ensure seamless user experiences."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaPaintBrush}
              title="Web Design"
              description="Designing unique and responsive websites with attention to detail, user needs, and aesthetics."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaCode}
              title="Website Development"
              description="Building high-performance websites with a focus on modern frameworks and clean code."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaImage}
              title="Graphic Design"
              description="Delivering creative visual designs including logos, banners, and marketing materials."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaGlobe}
              title="Illustration"
              description="Crafting unique and engaging illustrations for branding and marketing purposes."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaUsers}
              title="Poster Design"
              description="Designing compelling posters to communicate messages effectively through visual storytelling."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaChartLine}
              title="Brand Promotion"
              description="Helping brands grow and reach their target audience through strategic promotion and advertising."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaRocket}
              title="SEO"
              description="Optimizing websites to increase visibility and rank higher in search engine results."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaBusinessTime}
              title="Portfolio Website"
              description="Developing stunning portfolio websites to showcase your work and highlight your achievements."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaBusinessTime}
              title="Startup Websites"
              description="Building robust, scalable websites for startups to establish their online presence."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaUsers}
              title="Social Media Posts"
              description="Creating impactful social media content to engage your audience and build your online community."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaDesktop}
              title="Banner Design"
              description="Designing eye-catching banners for digital and print media, aimed at delivering key messages."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaRegHandshake}
              title="Advertisement Poster"
              description="Crafting persuasive and attention-grabbing advertisement posters for various platforms."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaBusinessTime}
              title="Business Cards"
              description="Designing professional and memorable business cards that leave a lasting impression."
            />
          </GridItem>
          <GridItem>
            <ServiceCard
              logo={FaRegHandshake}
              title="Digital Cards"
              description="Creating digital business and greeting cards for easy sharing and modern interaction."
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
