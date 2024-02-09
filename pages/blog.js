import { useState } from "react";
import { Flex, Button, useToast, Heading, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import BlogCard from "../components/BlogCard";
import BlogInputForm from "../components/BlogInputForm";
import Navbar from "@/components/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", content: "Content for Blog 1" },
    { title: "Blog 2", content: "Content for Blog 2" },
    { title: "Blog 3", content: "Content for Blog 3" },
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
        direction="column"
        align="center"
        justify="flex-start" // Align items at the top
        minH="100vh"
        bg="#111119"
        color="white"
        m={-10}
        p="20px"
      >
        <Heading
          as="h1"
          mb="20px"
          fontFamily="Work Sans, sans-serif"
          fontWeight={300}
          fontSize={{ base: "3xl", md: "7xl" }}
        >
          Blogs
        </Heading>
        <Button
          onClick={() => setShowInput(!showInput)}
          colorScheme="green"
          mb="20px"
          leftIcon={<AddIcon />}
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Create Blog
        </Button>
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
