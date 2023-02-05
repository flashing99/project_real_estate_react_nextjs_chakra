import { ContextProvider } from "@/contexts/ContextProvider";
import { ChakraProvider } from "@chakra-ui/react";


 
// Import Swiper styles

/* import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; */
// import styles from "../styles/PropertySlider.css"
// import styles from "./PropertySlider.module.css";

//  import "../styles/custom-swipper.css";

export default function App({ Component, pageProps }) {
  return (
    // <ContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    // </ContextProvider>
  );
}
