import { Image, Box, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PropertyThumbnailSlider = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //
  return (
    <>
      {/* BIG IMAGE */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        // loop={true}
        navigation={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {/* .............. */}
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo}>
              <img src={photo} />
            </SwiperSlide>
          );
        })}

        {/* .............. */}
      </Swiper>

      <Divider my="1rem" />
      {/* .............. */}

      {/* THUMBS IMAGE */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {/* .............. */}
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo}>
              <img src={photo} />
            </SwiperSlide>
          );
        })}

        {/* .............. */}
      </Swiper>
    </>
  );
};

export default PropertyThumbnailSlider;
