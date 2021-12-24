import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"
import "swiper/swiper-bundle.min.css"
//import "swiper/css/navigation"

import "./styles.css"

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper"
import { HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

// install Swiper modules
SwiperCore.use([Navigation])

export default function CatalogueSlider({ category }) {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={10}
        slidesPerGroup={10}
        spaceBetween={16}
        style={{ zIndex: 0 }}
      >
        <SwiperSlide>
          <HStack spacing={12}>
            {category?.map((item, index) => (
              <div key={item + index}>
                <Link to={`/products/${item.type}`}>{item.type}</Link>
              </div>
            ))}
          </HStack>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
