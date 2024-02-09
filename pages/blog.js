import { useState } from "react";
import {
  Flex,
  Button,
  useToast,
  Heading,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import BlogCard from "../components/BlogCard";
import BlogInputForm from "../components/BlogInputForm";
import Navbar from "@/components/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    // { title: "Blog 1", content: "Content for Blog 1" },
    // { title: "Blog 2", content: "Content for Blog 2" },
    // { title: "Blog 3", content: "Content for Blog 3" },
  ]);
  const [showInput, setShowInput] = useState(false);
  const toast = useToast();

  const handleSubmitBlog = (blogData) => {
    setBlogs([...blogs, blogData]);
    setShowInput(false);
    toast({
      title: "Blog Submitted",
      description: "Your blog has been successfully submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />
      <Flex
        overflowX="hidden"
        direction="column"
        align="center"
        justify="flex-start" // Align items at the top
        minH="100vh"
        bg="#111119"
        color="white"
        m={-10}
        pt="20px"
        pb="20px"
        pr="20px"
        pl="20px"
      >
        <Heading
          as="h1"
          mb="20px"
          fontFamily="Work Sans, sans-serif"
          fontWeight={300}
          fontSize="45px"
        >
          Blogs
        </Heading>
        <Button
          onClick={() => setShowInput(!showInput)}
          bgColor="green.400"
          borderRadius="50px"
          mb="20px"
          pl={12}
          cursor="pointer"
          height="30px"
          width="30px"
          transition="0.2s ease-in-out"
          _hover={{ color: "white", bgColor: "black" }}
          leftIcon={<AddIcon />}
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "md", md: "lg" }}
        ></Button>
        {showInput && <BlogInputForm onSubmit={handleSubmitBlog} />}
        {!showInput &&
          blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              content={blog.content}
              border="1px solid white"
              borderRadius="md"
              mb="10px"
            />
          ))}
      </Flex>
    </Box>
  );
};

export default Blog;
