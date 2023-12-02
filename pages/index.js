// pages/index.js

import { Box, ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const WorkSection = dynamic(() => import("@/components/WorkSection"));
const ContentSection = dynamic(() => import("@/components/ContentSection"));
const About = dynamic(() => import("@/components/About"));
const Head = dynamic(() => import("next/head"));
const Services = dynamic(() => import("@/components/Services"));
const Contact = dynamic(() => import("@/components/Contact"));
const ContentSection2 = dynamic(() => import("@/components/ContentSection2"));
const ContentSection3 = dynamic(() => import("@/components/ContentSection3"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const QRPay = dynamic(() => import("@/components/QRPay"));
const NavbarMob = dynamic(() => import("@/components/NavbarMob"));



const Home = () => {
  return (
    <Box scrollbehaviour="smooth" overflowX="hidden">
      <Head>
        <title>Home | ACNS </title>
      </Head>
      <ChakraProvider>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          <Navbar />
          {/* <NavbarMob /> */}
          <HeroSection />
          <ContentSection />
          <ContentSection2 />
          <ContentSection3 />
          <About />
          <WorkSection />
          <Services />
          <FAQ />
          <QRPay />
          <Contact />
        </div>
      </ChakraProvider>
    </Box>
  );
};

export default Home;
