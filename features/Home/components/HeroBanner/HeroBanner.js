import { Box, Text, Fade } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    /*
    <Box
      w="100%"
      m="0 auto"
      height="80vh"
      position="relative"
      //   overflow="hidden"
      alignContent="center"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        Autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/s1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/s2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/s3.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
    */

    <Fade in>
      <Box
        maxW="100%"
        // bgImage={'url("./images/s1.jpg")'}
        bgImage={'url("./img/03.jpg")'}
        bgPos={{ base: " center  ", md: "  top  " }}
        bgSize="cover"
        bgAttachment="fixed"
        minH={{ base: "90vh", sm: "70vh" }}
        pos="relative"
      >
        <Box
          w="100%"
          h="100%"
          bgColor="blue.900"
          opacity="0.8"
          pos="absolute"
          top="0"
        ></Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: "flex-start", sm: "space-between" }}
          flexDirection={{ base: "column ", sm: "row" }}
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          maxW="1280px"
          color="white"
          fontWeight="light"
          m="0 auto"
          p="2rem"
        >
          <Box width={{ base: "100%", sm: "50%" }} mr={{ base: "0", sm: "2rem" }}>
            <Text
              fontSize={{ base: "3xl", sm:"3xl", md: "5xl" }}
              lineHeight="shorter"
              mb="1.5rem"
            >
              Download our new <b>Property Buying Guide </b>today...
            </Text>
            <Text my="1.3rem" fontSize={{ base:"lg",sm:"md",md:"2xl" }}>
              A free PDF with our best secrets for evaluating a property
              purchase, calculating profit and so much more.
            </Text>
          </Box>

          <Box width={{ base: "100%", sm: "auto" }}>
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
