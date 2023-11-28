// pages/index.js

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <ChakraProvider>
      <div style={{ fontFamily: "Work Sans, sans-serif" }}>
        <Navbar />
        <HeroSection />
      </div>
    </ChakraProvider>
  );
};

export default Home;
