// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./PropertySlider.module.css";  */

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box ,Container} from "@chakra-ui/react";
import PropertyCard from "@/features/common/modules/PropertyCard";

const PropertySlider = ({ featuredProperties }) => {
  // console.log("PropertySlider :", featuredProperties);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      loop={true}
      //width={1200}
      // loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{
        //   clickable: true,
        dynamicBullets: true,
      }}
      // modules={[EffectFade, Navigation, Pagination, Autoplay]}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {/* <Container maxW="1280px" m="0 auto"> */}
      <Box maxW="sm">
        {featuredProperties.map((property) => {
          return (
            <SwiperSlide key={property.id}>
              <PropertyCard {...property} />
            </SwiperSlide>
          );
        })}
      </Box>
      {/* </Container> */}
      {/* {featuredProperties.map((property) => {

          <SwiperSlide key={property.id}>
             
            <PropertyCard  {...property} />;
          </SwiperSlide>;
        })} */}

      {/*   <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>   */}
    </Swiper>
  );
};

export default PropertySlider;
