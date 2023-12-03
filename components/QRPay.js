// QRPay.js
import { useEffect, useState } from "react";
import { Box, Text, Input, Button, Spinner } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

const QRPay = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);

    // Send email using emailjs
    const templateParams = {
      to_email: "shaswata.ssaha@gmail.com",
      from_email: email,
      message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n Has entered the payment page.`,
    };

    try {
      await emailjs.send(
        "service_oh3ka5q",
        "template_p905fwh",
        templateParams,
        "RNQHtfOcSdqCSJOxx"
      );

      // Simulate a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success toast or redirect to another page if needed
      console.log("Email sent successfully!");

      // Navigate to QRPay page
      router.push("/qrpay");
    } catch (error) {
      // Handle error
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#111119"
    >
      <Text fontSize="5xl" fontWeight="200" mb={10} mt={10} color="white">
        Help Us Grow!
      </Text>
      <Text
        fontSize={{base:"16px",md:"20px"}}
        textAlign="center"
        mb={10}
        fontWeight="200"
        ml={{base:"0px",md:"20px"}}
        color="white"
      >
        This will give you opportunities to be a part of our huge community and
        will enable you to get our services for a much cheaper price in the
        future. In short, you will get a member privilege of ACNS.
      </Text>

      <Box width="100%" maxWidth="400px">
        <Input
          placeholder="Name"
          mt={5}
          mb={5}
          bgColor="#222229"
          color="white"
          border="1px solid white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          mb={5}
          bgColor="#222229"
          color="white"
          border="1px solid white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone"
          mb={10}
          bgColor="#222229"
          color="white"
          border="1px solid white"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          mb={20}
          colorScheme="blue"
          size="lg"
          onClick={handlePayment}
          bgColor="transparent"
          border="1px solid white"
          _hover={{
            bgColor: "#111119",
            color: "black",
            bgColor: "white",
            border: "1px solid white",
          }}
        >
          {loading ? <Spinner /> : "Send a tip!"}
        </Button>
      </Box>
    </Box>
  );
};

export default QRPay;
