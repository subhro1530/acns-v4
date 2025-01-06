import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ScheduleMeet = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;

    script.onload = () => setError(false); // Reset error if script loads successfully
    script.onerror = () => setError(true); // Set error if script fails to load

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      color="#"
      ml={{ md: "20px" }}
      maxW="100vw"
      textAlign="center"
      id="ScheduleMeet"
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        mb={6}
        color="#181824"
        fontWeight={300}
      >
        Schedule a Meeting
      </Heading>

      {!error ? (
        <Box>
          <div className="tidycal-embed" data-path="acns/bookaservice"></div>
        </Box>
      ) : (
        <Text color="red.400" fontSize="lg">
          Failed to load the scheduling widget. Please try again later or visit{" "}
          <a
            href="https://tidycal.com/acns/bookaservice"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "cyan", textDecoration: "underline" }}
          >
            this link
          </a>
          .
        </Text>
      )}
    </Box>
  );
};

export default ScheduleMeet;
