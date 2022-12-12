// import BaseCatalog from "./BaseCatalog";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import 'swiper/css';
import "../css/swiper.css";
import "swiper/css/free-mode";
export default function BaseSlider({components}) {

  const sliderItems = components.map((item, index) => 
    <SwiperSlide key={index}>
      {item}
    </SwiperSlide>
  )


  return (
    <Swiper spaceBetween={40} slidesPerView={1.2} freeMode={true} modules={[FreeMode]} slideToClickedSlide={true} >
      {sliderItems}
    </Swiper>
  );
}
