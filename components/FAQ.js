// FAQ.js
import {
  Box,
  Heading,
  Flex,
  Text,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const FAQ = () => {
  const questionsAndAnswers = [
    {
      question: "What services does our web development company provide?",
      answer:
        "Our web development company offers a range of services including website design, development, and maintenance. We specialize in creating responsive and visually appealing websites tailored to meet your business needs.",
    },
    {
      question: "How do I choose the right design for my website?",
      answer:
        "Choosing the right design for your website involves understanding your brand identity and target audience. Our team of graphic designers will work closely with you to create a custom design that aligns with your vision and resonates with your audience.",
    },
    {
      question: "What technologies do we use in our web development projects?",
      answer:
        "We utilize cutting-edge technologies in our web development projects, including Next.JS framework, HTML5, CSS3, JavaScript, and responsive design frameworks. This ensures that your website is not only visually appealing but also performs optimally across various devices and platforms.",
    },
    {
      question: "Can you update and maintain an existing website?",
      answer:
        "Absolutely! Our web development team provides website maintenance services, including updates, security enhancements, and content management. Whether you need minor changes or a complete overhaul, we've got you covered.",
    },
    {
      question: "What graphic design services do we offer?",
      answer:
        "Our graphic design services cover a wide range of needs, including logo design, branding, social media graphics, and promotional materials. We aim to visually communicate your brand message and enhance your overall online presence.",
    },
    {
      question: "How can I ensure my website is user-friendly and accessible?",
      answer:
        "Ensuring a user-friendly and accessible website is a priority for us. Our design and development processes include usability testing and compliance with accessibility standards, guaranteeing a positive experience for all visitors.",
    },
    {
      question: "Do we provide e-commerce solutions?",
      answer:
        "Yes, we specialize in creating e-commerce websites with secure payment gateways, intuitive navigation, and engaging product displays. Whether you're starting an online store or upgrading an existing one, we have the expertise to bring your e-commerce vision to life.",
    },
    {
      question: "What steps are involved in the website development process?",
      answer:
        "Our website development process includes initial consultation, planning, design mockups, development, testing, and deployment. We ensure transparent communication at every stage, keeping you involved and informed throughout the project.",
    },
    {
      question: "How do I request a quote for my project?",
      answer:
        "To request a quote, simply reach out to us through our contact page or email. Provide details about your project requirements, and our team will respond promptly with a tailored quote and additional information.",
    },
    {
      question: "Can you help with website hosting and domain registration?",
      answer:
        "Yes, we offer assistance with website hosting and domain registration, ensuring a seamless process for launching your website. Our team can guide you through the options and help you choose the best hosting and domain solutions for your needs.",
    },
  ];

  const [isOpen, setIsOpen] = useState(
    Array(questionsAndAnswers.length).fill(false)
  );

  const handleToggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Box
      bg="white"
      p={8}
      ml={{ base: "0px", md: "100px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading mt={10} fontSize="6xl" fontWeight={200} mb={14}>
        FAQ&apos;s
      </Heading>

      {questionsAndAnswers.map((item, index) => (
        <Flex
          key={index}
          direction="column"
          mb={4}
          w="100%"
          border="1px solid black"
          borderRadius="md"
          overflow="hidden"
        >
          <Flex
            justify="space-between"
            align="center"
            cursor="pointer"
            onClick={() => handleToggle(index)}
            p={4}
          >
            <Text fontSize="lg">{item.question}</Text>
            <IconButton
              icon={isOpen[index] ? <FaMinus /> : <FaPlus />}
              fontSize="lg"
            />
          </Flex>
          <Collapse in={isOpen[index]} animateOpacity>
            <Text
              mt={2}
              fontSize="lg"
              p={4}
              color="gray.600"
              transition="height 0.3s ease"
            >
              {item.answer}
            </Text>
          </Collapse>
        </Flex>
      ))}
    </Box>
  );
};

export default FAQ;
