// About.js
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const languages = ["es", "bn", "it", "en"];

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const fetchTranslation = async (text, targetLanguage) => {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            text
          )}&langpair=ar|${targetLanguage}`
        );
        const data = await response.json();
        return data?.responseData?.translatedText || text;
      } catch (error) {
        console.error("Translation error:", error);
        return text;
      }
    };

    const typeText = async (text, delay, clearPrevious = false) => {
      if (clearPrevious) {
        setDisplayedText("");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      for (let i = 0; i < text.length; i++) {
        setDisplayedText((prevText) => prevText + text[i]);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };

    const updateText = async () => {
      for (let i = 0; i < languages.length; i++) {
        const currentLanguage = languages[i];

        // Display "Hello" in the current language with typing effect
        // await typeText("Hello", 100, true); // Clear previous text

        // Fetch translation for the next language
        const translatedText = await fetchTranslation("Hello", currentLanguage);

        // Display translated text in the current language with typing effect
        await typeText(translatedText, 100, true);

        // Delay before moving to the next language
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Reset to the first language after displaying in all languages
      setCurrentLanguageIndex(0);
    };

    // Initial trigger
    updateText();
  }, [currentLanguageIndex]);

  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <Box
      pl="10vw"
      bg="#111119"
      // height="100vh"
      color="white"
      pt={4}
      pb={4}
      pr={4}
      borderRadius="md"
      id="#About"
    >
      <Heading
        as="h1"
        mt={20}
        fontSize="1xl"
        mb={4}
        color="gray.200"
        fontWeight={200}
        borderBottom="1px solid gray"
        letterSpacing={1}
      >
        <Box mb={5}>/ABOUT</Box>
      </Heading>
      <Box
        display="flex"
        fontSize="30px"
        color={textColor}
        width="80vw" // Fixed width
        mt={15}
      >
        <Box width="55vw" color="cyan" fontSize={50}>
          {displayedText}
          {displayedText.length == "" ? "" : " !"}
        </Box>
        <Text ml={4} pl={10} fontSize={16} color="white" fontWeight={200}>
          I&apos;m Shaswata Saha, a professional graphic designer, web designer,
          and branding specialist based in Kolkata, India.
          <br />
          <br />
          With years of experience, I provide full-service design and creative
          solutions that strive for exceptional results. My work blends artistry
          and innovation, going beyond trends to forge genuine connections.
          Through attention to detail and a commitment to excellence, I aim to
          create designs that truly resonate. I work to create a fusion of
          captivating visuals and strategic brilliance that elevates the
          client&apos;s brand experience to new heights.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
