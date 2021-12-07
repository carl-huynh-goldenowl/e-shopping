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

const catalogue = [
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item",
]

export default function CatalogueSlider() {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <HStack spacing={12}>
            {catalogue.map((item, index) => (
              <div key={item + index}>
                <Link to={`/products/${item + index}`}>{item + index}</Link>
              </div>
            ))}
          </HStack>
        </SwiperSlide>
        <SwiperSlide>
          <HStack spacing={12}>
            {catalogue.map((item, index) => (
              <div key={item + index}>
                <Link to={`/products/${item + index}`}>{item + index}</Link>
              </div>
            ))}
          </HStack>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
