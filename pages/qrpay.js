import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const QrPay = () => {
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      // Redirect logic after 5 minutes
      router.push("/");
    }
  }, [timer, router]);

  const handleDoneClick = () => {
    // Logic to handle "Done" button click
    router.push("/");
    // Show toast notification
    toast({
      title: "Payment Verification",
      description:
        "Your payment will be verified shortly. You will receive an email.",
      status: "info",
      duration: 5000, // 5 seconds
      isClosable: true,
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <>
      <Head>
        <title>Payment Gateway | ACNS</title>
      </Head>
      <Box
        bgColor="#21182b"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        color="white"
        overflow="hidden"
        alignItems="center"
        mt={-10}
        ml={-10}
        mr={-10}
        pt={65}
        pb={20}
        mb={-10}
      >
        <Box textAlign="center">
          {/* Header */}
          <Heading
            fontWeight={200}
            fontSize={50}
            fontFamily="Work Sans, sans-serif"
            mb="10"
          >
            ACNS QR Payment
          </Heading>
          <Box
            fontFamily="Work Sans, sans-serif"
            fontSize={20}
            fontWeight={200}
            padding={20}
            textAlign="center"
          >
            100% secured (Please contact ACNS through the form before making any
            further transactions. As proof, please submit the screenshot of your
            payment to the WhatsApp number mentioned on the home page. We are
            looking forward to solving your problems as soon as possible. Thank
            you!)
          </Box>

          {/* Display QR code */}
          <Box
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
            marginBottom="4"
            maxW="500px"
            mx="auto"
          >
            <Image src="/qr.jpg" alt="QR Code" width={310} height={300} />
          </Box>

          {/* Display timer */}
          <Text
            fontFamily="Work Sans, sans-serif"
            fontSize="xl"
            marginBottom="4"
          >
            Time remaining: {formatTime(timer)}
          </Text>

          {/* "Done" button */}
          <Button
            fontFamily="Work Sans, sans-serif"
            colorScheme="purple"
            size="sm" // Adjusted size to make it smaller
            paddingX="4" // Added padding to the sides
            fontSize={20}
            py={10}
            mb={100}
            mt={20}
            onClick={handleDoneClick}
            width={100}
            bgColor="#21182b"
            color="white"
            borderRadius={10}
            cursor="pointer"
            _hover={{ bg: "white", color: "#21182b" }} // Hover styles
          >
            Done
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QrPay;
