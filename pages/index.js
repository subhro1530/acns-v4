// pages/index.js

import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ContentSection from "@/components/ContentSection";
import About from "@/components/About";
import Head from "next/head";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ContentSection2 from "@/components/ContentSection2";
import ContentSection3 from "@/components/ContentSection3";
import FAQ from "@/components/FAQ";
import Payment from "@/components/Payment";

const Home = () => {
  return (
    <Box scrollbehaviour="smooth" overflowX="hidden">
      <Head>
        <title>Home | ACNS </title>
      </Head>
      <ChakraProvider>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          <Navbar />
          <HeroSection />
          <ContentSection />
          <ContentSection2 />
          <ContentSection3 />
          <About />
          <WorkSection />
          <Services />
          <FAQ />
          <Payment />
          <Contact />
        </div>
      </ChakraProvider>
    </Box>
  );
};

export default Home;
