import { Box, Button, Heading, Image, Flex } from "@chakra-ui/react";
import Typist from "react-typist";
import { useState } from "react";

const DownloadApp = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  // const handleDownload = () => {
  //   const apkFileName = "pangea_news.apk";
  //   const apkFilePath = `/${apkFileName}`;

  //   // Create a link element
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = apkFilePath;
  //   downloadLink.download = apkFileName;

  //   // Append the link to the document
  //   document.body.appendChild(downloadLink);

  //   // Trigger the click event to start the download
  //   downloadLink.click();

  //   // Remove the link from the document
  //   document.body.removeChild(downloadLink);
  // };

  const handleTypingDone = () => {
    setTimeout(() => {
      setIsTypingDone(true);
    }, 5000);
  };

  const handleResetTyping = () => {
    setTimeout(() => {
      setIsTypingDone(false);
    }, 5000);
  };
  return (
    <Box
      backgroundImage="url('https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.webp?b=1&s=170667a&w=0&k=20&c=e8mSv3z6PhT18EUmzgtdMCbQecYzhHoqu_ts8tFdN6c=')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight={{ md: "100vh" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginLeft={{ md: "20" }}
      height={{ base: "50vh" }}
    >
      <Box
        backgroundColor="rgba(0,255,255, 0.4)"
        padding="8"
        borderRadius="md"
        textAlign="center"
        width={{ md: "100%" }}
        height={{ base: "100%" }}
      >
        <Flex flexDirection="column" alignItems="center">
          <Heading
            fontWeight={{ base: "400", md: "400" }}
            mb={5}
            fontSize={{ base: "18px", md: "50px" }}
            color="white"
          >
            {isTypingDone ? (
              <Typist key="reset" onTypingDone={handleResetTyping}>
                Introducing ACNS App for Android!
              </Typist>
            ) : (
              <Typist key="typing" onTypingDone={handleTypingDone}>
                Introducing ACNS App for Android!
              </Typist>
            )}
          </Heading>
          <Image
            src="/acns-mobile.png"
            alt="App Image"
            boxSize="200px"
            objectFit="cover"
            borderRadius="md"
            height={{ md: "auto" }}
            width={{ base: "100%", md: "90%" }}
            mb="4"
          />
          <Button colorScheme="blue">
            {/* onClick={handleDownload}> */}
            Download Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default DownloadApp;
