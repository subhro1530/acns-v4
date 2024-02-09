import { useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";

const BlogInputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = async () => {
    if (!title || !content) {
      toast({
        title: "Missing Fields",
        description: "Please fill in both the title and content fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Encode the admin key
    const encodedAdminKey = btoa(adminKey);

    try {
      // Send the encoded admin key along with the blog data
      const response = await axios.post("/api/posts", {
        title,
        content,
        adminKey: encodedAdminKey,
      });
      console.log("New post created:", response.data);
      toast({
        title: "Blog Submitted",
        description: "Your blog has been successfully submitted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
      onClose();
    } catch (error) {
      console.error("Error creating blog:", error);
      toast({
        title: "Error",
        description: "Failed to submit the blog. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Button
        colorScheme="green"
        onClick={onOpen}
        fontFamily="Work Sans, sans-serif"
        alignSelf="center"
        mb={4}
        bg="green.500"
        _hover={{ bg: "green.600" }}
        borderRadius="50px"
        py={10}
        cursor="pointer"
        px={20}
      >
        Create Blog
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          mx={20}
          my={20}
          bg="rgba(0, 0, 0, 0.9)"
          borderRadius="10px"
          p={30}
        >
          <ModalHeader
            textAlign="center"
            color="white"
            fontSize="30px"
            fontFamily="Work Sans, sans-serif"
            mt={20}
            mb={10}
          >
            Create Blog
          </ModalHeader>
          <ModalBody>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Input
                placeholder="Title"
                mb="10px"
                mt={20}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fontFamily="Work Sans, sans-serif"
                width="100%"
                bg="transparent"
                color="white"
                border="1px solid lightgray"
                borderRadius="5px"
                px={10}
                py={10}
                outline="none"
                fontSize="18px"
                _placeholder={{ color: "lightgray" }}
              />
              <Textarea
                placeholder="Blog content"
                mb="10px"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fontFamily="Work Sans, sans-serif"
                width="100%"
                resize="vertical"
                minH="150px"
                bg="transparent"
                color="white"
                borderRadius="10px"
                px={10}
                py={10}
                outline="none"
                fontSize="18px"
                border="1px solid lightgray"
                _placeholder={{ color: "lightgray" }}
              />
              {/* Admin key input field */}
              <Input
                placeholder="Admin Key"
                mb="10px"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                fontFamily="Work Sans, sans-serif"
                width="100%"
                bg="transparent"
                color="white"
                border="1px solid lightgray"
                borderRadius="5px"
                px={10}
                py={10}
                outline="none"
                fontSize="18px"
                _placeholder={{ color: "lightgray" }}
              />
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="green"
              mr={3}
              cursor="pointer"
              onClick={handleSubmit}
              bgColor="green.500"
              _hover={{ bg: "green.600" }}
              color="black"
              fontSize="25px"
              height="40px"
              borderRadius="5px"
              width="40px"
            >
              ✓
            </Button>
            <Button
              onClick={onClose}
              bg="red.500"
              cursor="pointer"
              _hover={{ bg: "red.600" }}
              color="black"
              fontSize="25px"
              height="40px"
              borderRadius="5px"
              width="40px"
            >
              ✕
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BlogInputForm;
