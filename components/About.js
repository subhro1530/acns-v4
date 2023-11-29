// About.js
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const About = () => {
  const languages = ["en", "hi", "es", "bn"];
  const textToType = "Hello";
  const initialLanguage = "en";

  const [displayedText, setDisplayedText] = useState("");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${textToType}&langpair=${initialLanguage}|${languages[currentLanguageIndex]}`
        );
        const data = await response.json();
        return data?.responseData?.translatedText || textToType;
      } catch (error) {
        console.error("Translation error:", error);
        return textToType;
      }
    };

    const updateText = async () => {
      // Display "Hello" in English
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + textToType[currentIndex]);
        currentIndex++;

        if (currentIndex === textToType.length) {
          clearInterval(typingInterval);

          // Clear "Hello"
          setTimeout(() => {
            let clearedText = textToType;
            const clearingInterval = setInterval(() => {
              clearedText = clearedText.slice(0, -1);
              setDisplayedText(clearedText);

              if (clearedText === "") {
                clearInterval(clearingInterval);

                // Display "Hello" in another language
                setTimeout(async () => {
                  const translatedText = await fetchTranslation();
                  let newIndex = 0;

                  const translatingInterval = setInterval(() => {
                    setDisplayedText(
                      (prevText) => prevText + translatedText[newIndex]
                    );
                    newIndex++;

                    if (newIndex === translatedText.length) {
                      clearInterval(translatingInterval);

                      // Move to the next language
                      setCurrentLanguageIndex((prevIndex) =>
                        prevIndex === languages.length - 1 ? 0 : prevIndex + 1
                      );
                    }
                  }, 200); // Typing interval for translation
                }, 1000); // Delay before displaying translated text
              }
            }, 200); // Clearing interval for "Hello"
          }, 1000); // Delay before clearing "Hello"
        }
      }, 200); // Typing interval for "Hello"
    };

    updateText();

    return () => clearInterval(updateText);
  }, [currentLanguageIndex, languages, initialLanguage, textToType]);

  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <Box
      pl="10vw"
      bg="#111119"
      height="100vh"
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
        <Box width="50vw" color="cyan" fontSize={50}>
          {displayedText}
        </Box>
        <Text ml={4} pl={10} fontSize={16} color="white" fontWeight={200}>
          I’m Shaswata Saha, an award-winning graphic designer, web designer,
          and branding specialist based in Fort Wayne, Indiana.
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
