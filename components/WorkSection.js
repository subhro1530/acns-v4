import { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const workItems = [
  {
    name: "UrbanMotion",
    description:
      "An innovative car rental platform offering streamlined booking and user-friendly navigation for modern travelers.",
    imageUrl: "/urbanmotion.png",
    imageLink: "https://urbanmotion.vercel.app/",
  },
  {
    name: "Marketing Lab",
    description:
      "A professional freelance website designed for MarketingLab's dynamic team in Salt Lake, Kolkata, showcasing their services and portfolio.",
    imageUrl: "/marketinglab.png",
    imageLink: "https://www.marketinglab.in/",
  },
  {
    name: "Lecole De Talents",
    description:
      "A vibrant website created for an educational academy that celebrates Afro dance and cultural learning opportunities.",
    imageUrl: "/lecole.png",
    imageLink: "https://lecoledetalents.vercel.app/",
  },
  {
    name: "Shadow",
    description:
      "A powerful cyber analysis toolkit developed for digital forensics, enhancing cybersecurity capabilities.",
    imageUrl: "/shadow.png",
    imageLink: "https://shadow141.vercel.app/",
  },
  {
    name: "VitalityAI",
    description:
      "A cutting-edge platform consolidating diverse medical facilities and services into one convenient location.",
    imageUrl: "/vitality.png",
    imageLink: "https://vitalityaiofficial.vercel.app/",
  },
  {
    name: "Pangea News",
    description:
      "An engaging and responsive news website designed to provide global audiences with the latest updates and stories.",
    imageUrl: "/pangeanews.png",
    imageLink: "https://pangeanews.vercel.app/",
  },
  {
    name: "Triaging Healthcare",
    description:
      "A healthcare web app offering efficient symptom triaging and patient management for medical professionals.",
    imageUrl: "/triaging.png",
    imageLink: "https://triaginghealthcare.vercel.app/",
  },
  {
    name: "Femwellcare",
    description:
      "An empowering platform dedicated to promoting women's healthcare through innovative design and accessible features.",
    imageUrl: "/femwellcare.png",
    imageLink: "https://femwellcare.vercel.app/",
  },
  {
    name: "Nova Sparkle",
    description:
      "A dynamic music platform combining stunning visuals with seamless user navigation for an engaging experience.",
    imageUrl: "/novasparkle.png",
    imageLink: "https://nova-sparkle-music.vercel.app/",
  },
  {
    name: "0xArchitect",
    description:
      "A crypto analysis website equipped with advanced tools and metrics for blockchain and digital asset exploration.",
    imageUrl: "/0xarchitect.png",
    imageLink: "https://0xarchitect-test.vercel.app/",
  },
  {
    name: "GymOn",
    description:
      "A sleek and responsive frontend project crafted for a modern gym website, combining design with functionality.",
    imageUrl: "/gymon.png",
    imageLink: "https://gymon-d184b.web.app/",
  },
  {
    name: "ClimaGuard",
    description:
      "An intuitive climate monitoring website providing real-time updates and valuable environmental insights.",
    imageUrl: "/climaguard.png",
    imageLink: "https://climaguard.vercel.app/",
  },
  {
    name: "Bal Adhikar Funquest",
    description:
      "An interactive educational platform created for children, blending learning and entertainment seamlessly.",
    imageUrl: "/baladhikarfunquest.png",
    imageLink: "https://bal-adhikar-funquest.vercel.app/",
  },
  {
    name: "Crypto Expressio",
    description:
      "A comprehensive cryptocurrency platform delivering detailed market insights and analysis tools for enthusiasts.",
    imageUrl: "/crypto-expressio.png",
    imageLink: "https://crypto-expressio.web.app/",
  },
];


const WorkCard = ({ name, description, imageUrl, imageLink }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        bg="white"
        shadow="lg"
        borderRadius="md"
        overflow="hidden"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "translateY(-10px)", shadow: "xl" }}
      >
        <Image
          src={imageUrl}
          alt={name}
          width="100%"
          height="200px"
          objectFit="cover"
        />
        <Box p={4}>
          <Heading as="h3" size="md" mb={2}>
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            {description}
          </Text>
          <Button
            as={ChakraLink}
            href={imageLink}
            target="_blank"
            colorScheme="teal"
            size="sm"
          >
            View Project
          </Button>
        </Box>
      </Box>
    </motion.div>
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
      bg="gray.50"
      py={10}
      px={4}
      mx="auto"
      maxW="1200px"
      id="WorkSection"
    >
      {/* Section Header */}
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="teal.500"
        >
          My Projects
        </Heading>
        <Text color="gray.600" fontSize="md" mt={2}>
          Explore some of the projects I&apos;ve worked on, showcasing
          creativity and technical expertise.
        </Text>
      </Box>

      {/* Work Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {workItems.map((item, index) => (
          <WorkCard
            key={index}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            imageLink={item.imageLink}
          />
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box textAlign="center" fontSize="lg" color="gray.600" mt={10}>
        And many more...
      </Box>
    </Box>
  );
};

export default WorkSection;
