import { Box, Flex, Button, Text, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

const testimonials = [
  {
    name: "Mintu Jha",
    quote: "Developed our website with transparency and without any issues!",
    review:
      "Shaswata worked with Mintu Jha on Marketing Labs and developed their website. The process was transparent and without any issues.",
  },
  {
    name: "Msk",
    quote: "Satisfied client on Fiverr by creating a logo.",
    review:
      "Shaswata created a logo for Msk on Fiverr and he was satisfied with the outcome.",
  },
  {
    name: "Jane Smith",
    quote: "Highly recommend! Great service and professionalism.",
    review:
      "Shaswata's professionalism and service were outstanding. Highly recommended!",
  },
  {
    name: "Mike Anderson",
    quote: "Exceeded expectations. Phenomenal work!",
    review: "Shaswata exceeded all expectations with phenomenal work!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fiverrLink = "https://www.fiverr.com/s/kQdxzy";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <Box >
      <Box
        as="h1"
        bgColor="black"
        color="white"
        textAlign="center"
        ml={{ md: "80px" }}
        fontSize="50px"
        pt={10}
        fontWeight={200}
      >
        Testimonials
      </Box>
      <Flex
        justify="center"
        align="center"
        height="400px"
        ml={{ md: "85px" }}
        zIndex={-1}
        bg="black"
        color="white"
        position="relative"
        overflow="hidden"
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            width="100%"
            maxWidth="600px"
            textAlign="center"
            position="absolute"
            left="50%"
            transform={`translateX(-50%) scale(${
              index === currentIndex ? 1 : 0.8
            })`}
            transition="transform 0.3s ease-in-out"
            opacity={index === currentIndex ? 1 : 0.1}
                filter={index === currentIndex ? "none" : "blur(3px)"}
                pb={10}
          >
            <Text fontSize="4xl" fontWeight="bold" mb={4}>
              {testimonial.name}
            </Text>
            <Text fontSize="xl" fontStyle="italic" mb={6}>
              "{testimonial.quote}"
            </Text>
            <Text fontSize="lg">{testimonial.review}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TestimonialSlider;
