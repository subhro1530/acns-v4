import { Box, Heading, Text } from "@chakra-ui/react";

const BlogCard = ({ title, content }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Box
      bg="gray.800"
      color="white"
      p="20px"
      borderBottom="2px solid gray"
      borderRadius="md"
      mb="20px"
      w="80vw"
      wordBreak="break-word"
    >
      <Heading
        as="h2"
        mb="10px"
        fontFamily="Work Sans, sans-serif"
        fontWeight="500"
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        {title}
      </Heading>
      <Text fontFamily="Work Sans, sans-serif" mb="10px">
        {content}
      </Text>
      <Text
        fontSize="sm"
        fontFamily="Work Sans, sans-serif"
        opacity="0.3"
        fontStyle="italic"
      >
        {" "}
        {/* Adjusted color */}
        Posted on {currentDate}
      </Text>
    </Box>
  );
};

export default BlogCard;
