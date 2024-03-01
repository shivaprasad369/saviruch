import React from "react";
import css from "./Testmonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { motion } from "framer-motion";
import logo from '../../assets/Main.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar } from "@mui/material";

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span style={{color:'#D4AF37'}}>Top Rated</span>
          <span>
          Savi Ruchi's Chefless Frozen Gravy Paste Ready in 10 Minutes.
          </span>
        </div>

        <img src={logo} alt="" />
          
        <div className={css.container}>
          <span style={{color:'#D4AF37'}}>50+</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={css.reviews} style={{color:'#D4AF37'}}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={2}
          slidesPerGroup={1}
       
          spaceBetween={30}
          className={css.tCarousel}
          breakpoints={{
            856: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial} key={i} style={{color:'black'}}>
              <Avatar className="img" src="/broken-image.jpg" sx={{height:70, width:70}} />
                <span>{testimonial.comment}</span>
                <hr />
                
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
