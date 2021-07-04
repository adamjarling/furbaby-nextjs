//import 'tailwindcss/tailwind.css'
import "styles/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ParallaxProvider>
  );
}

export default MyApp;
