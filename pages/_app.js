//import 'tailwindcss/tailwind.css'
import "styles/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ParallaxProvider>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ParallaxProvider>
  );
}

export default MyApp;
