// pages/index.js

import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import About from "@/components/About";
import Head from "next/head";
import Services from "@/components/Services";

const Home = () => {
  return (
    <Box scrollBehaviour="smooth" overflowX="hidden">
      <Head>
        <title>Home | ACNS </title>
      </Head>
      <ChakraProvider>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          <Navbar />
          <HeroSection />
          <ContentSection />
          {/* <About /> */}
          <Services />
        </div>
      </ChakraProvider>
    </Box>
  );
};

export default Home;
