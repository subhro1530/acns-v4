// components/ContactPage.js
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

const Contact = () => {
  const toast = useToast();

  const sendEmail = async (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;

    // Replace these values with your own EmailJS template and user ID
    const templateParams = {
      to_email: "shaswata.ssaha@gmail.com",
      from_email: user_email,
      message: e.target.message.value,
    };
    const autoReplyParams = {
      from_email: user_email, // User's email address
    };

    try {
      // Send email to your email address
      await emailjs.send(
        "service_oh3ka5q",
        "template_p905fwh",
        templateParams,
        "RNQHtfOcSdqCSJOxx"
      );

      // Send auto-reply to the user
      await emailjs.send(
        "service_oh3ka5q",
        "template_p905fwh",
        autoReplyParams,
        "RNQHtfOcSdqCSJOxx"
      );

      // Show success toast
      toast({
        title: "Email sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      e.target.reset();
      // You can add additional logic here, such as clearing the form
    } catch (error) {
      // Show error toast
      toast({
        title: "Error sending email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <Box
      bg="black"
      color="white"
      p={8}
      mx="auto"
      zIndex={-5}
      pl={{ base: "20px", md: "150px" }}
      maxW="100vw"
      borderRadius="md"
      id="ContactPage"
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
        <Box mb={5}>/CONTACT</Box>
      </Heading>

      <Heading
        as="h1"
        mt={20}
        fontSize="2xl"
        mb={4}
        color="gray.200"
        fontWeight={200}
        letterSpacing={1}
      >
        <Box mb={105} fontSize={80} color="cyan">
          Ready to get Started?
        </Box>
      </Heading>

      <form onSubmit={sendEmail}>
        <Box mb={4}>
          <label htmlFor="email" color="gray.400">
            Email (To get in touch kindly provide your email for our convenience)
          </label>
          <Input type="email" name="email" required />
        </Box>

        <Box mb={4}>
          <label htmlFor="message" color="gray.400">
            Message (Please include your email/contact details here to get in touch with)
          </label>
          <Textarea name="message" required />
        </Box>

        <Button type="submit" colorScheme="cyan">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
