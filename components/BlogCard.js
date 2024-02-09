import { Box, Heading, Text } from "@chakra-ui/react";

const BlogCard = ({ title, content }) => {
  return (
    <Box mb="40px">
      <Heading
        as="h2"
        mb="10px"
        fontFamily="Work Sans, sans-serif"
        fontWeight="500"
        fontSize={{ base: "xl", md: "2xl" }}
      >
        {title}
      </Heading>
      <Text fontFamily="Work Sans, sans-serif">{content}</Text>
    </Box>
  );
};

export default BlogCard;
