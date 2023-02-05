/* import React, { useRef, useState } from "react";*/
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

/* import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./PropertySlider.module.css";  */
 
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import {   Box } from "@chakra-ui/react";

const PropertySlider = () => {
  return (
    <Box
      w="100%"
      m="0 auto"
      height="500px"
      
      position="relative"
    //   overflow="hidden"
      alignContent="center"
      
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        Autoplay={{ delay: 2000 }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg"    />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg"   />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PropertySlider;
