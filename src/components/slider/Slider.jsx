import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640:{
            slidesPerView: 3
          },
          
          0: {
            slidesPerView: 1
          }
        }}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s" style={{color:'black'}}>
              <div className="name">
                <span style={{color:'#D4AF37'}}>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span style={{color:'#D4AF37' }}>{slide.price}</span>
              <div>Order Now</div>
            </div>

            <img src={slide.img} alt="" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
