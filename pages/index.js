// pages/index.js

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import About from "@/components/About";

const Home = () => {
  return (
    <ChakraProvider>
      <div style={{ fontFamily: "Work Sans, sans-serif" }}>
        <Navbar />
        <HeroSection />
        <ContentSection />
        <About />
      </div>
    </ChakraProvider>
  );
};

export default Home;
