// pages/_app.js

import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=EIt-FS6oRnv6ueBDmQoF7WFhDrXQFyI6dR05L6hk3ApGeeeKsoL02SRZgoIAt8HWwbCsZqhTFy5oHjQy`;
    script.async = true;

    script.onload = () => {
      console.log("PayPal SDK script loaded");
      // Refresh current route after script is loaded
      router.replace(router.asPath);
    };

    script.onerror = () => {
      console.error("Failed to load PayPal SDK script");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
