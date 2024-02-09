import { useState } from "react";
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

const BlogInputForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [token, setToken] = useState("");
  const [isTokenValid, setIsTokenValid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = () => {
    if (isTokenValid) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
      onClose();
    } else {
      toast({
        title: "Invalid Token",
        description: "Please enter a valid token to submit a blog.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleTokenVerification = () => {
    if (token === "iwannapost") {
      setIsTokenValid(true);
      onClose();
    } else {
      toast({
        title: "Invalid Token",
        description: "Please enter a valid token to submit a blog.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mt="40px">
      <Button
        colorScheme="green"
        onClick={onOpen}
        fontFamily="Work Sans, sans-serif"
      >
        Create Blog
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Token"
              mb="10px"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              fontFamily="Work Sans, sans-serif"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={handleTokenVerification}
            >
              Verify Token
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Textarea
        placeholder="Blog content"
        mb="10px"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fontFamily="Work Sans, sans-serif"
      />
      <Button
        colorScheme="green"
        onClick={handleSubmit}
        fontFamily="Work Sans, sans-serif"
      >
        Submit Blog
      </Button>
    </Box>
  );
};

export default BlogInputForm;
