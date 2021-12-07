import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"
// import "swiper/swiper-bundle.min.css"
// import "./styles.css"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"
import { Box, Image } from "@chakra-ui/react"

// install Swiper modules
SwiperCore.use([Navigation])

export default function ProductDetailImgsSlider({ imgs, handleChangeImg }) {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={3}
        onClick={(e) => handleChangeImg(e.clickedIndex)}
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={"img" + index}>
            <Box>
              <Image
                objectFit="cover"
                width="100%"
                height="30rem"
                src={item}
                alt={"img" + index}
                _hover={{
                  border: "0.2rem solid tomato",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
