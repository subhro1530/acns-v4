// pages/index.js

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <ChakraProvider>
      <div style={{ fontFamily: "Work Sans, sans-serif" }}>
        <Navbar />
      </div>
    </ChakraProvider>
  );
};

export default Home;
