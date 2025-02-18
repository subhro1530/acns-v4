// pages/index.js
import { Box, ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  { ssr: false }
);
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
const PayThroughPayPal = dynamic(
  () => import("@/components/PayThroughPayPal"),
  {
    ssr: false,
  }
);
const WorkSection = dynamic(() => import("@/components/WorkSection"), {
  ssr: false,
});
const PayPal = dynamic(() => import("@/components/PayPalButton"), {
  ssr: false,
});
const ContentSection = dynamic(() => import("@/components/ContentSection"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Head = dynamic(() => import("next/head"));
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const ContentSection2 = dynamic(() => import("@/components/ContentSection2"), {
  ssr: false,
});
const ContentSection3 = dynamic(() => import("@/components/ContentSection3"), {
  ssr: false,
});
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const QRPay = dynamic(() => import("@/components/QRPay"), { ssr: false });
const NavbarMob = dynamic(() => import("@/components/NavbarMob"), {
  ssr: false,
});
const DownloadApp = dynamic(() => import("@/components/DownloadApp"), {
  ssr: false,
});
const ScheduleMeet = dynamic(() => import("@/components/ScheduleMeet"), {
  ssr: false,
});

const Home = () => {
  return (
    <Box scrollbehaviour="smooth" overflowX="hidden">
      <Head>
        <title>ACNS | Delivering Top Notch Services </title>
      </Head>
      <ChakraProvider>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          <Navbar />
          <NavbarMob />
          <HeroSection />
          <ContentSection />
          <ContentSection2 />
          <ContentSection3 />
          <About />
          <WorkSection />
          <Services />
          <Pricing />
          <PayThroughPayPal />
          <QRPay />
          <TestimonialSlider />
          <DownloadApp />
          <FAQ />
          <ScheduleMeet />
          <Contact />
        </div>
      </ChakraProvider>
    </Box>
  );
};

export default Home;
