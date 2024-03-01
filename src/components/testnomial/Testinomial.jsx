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
    <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0,transition:{ease:"easeInOut",delay:0.5, type:'spring'}}} className={css.testimonials}>
      <div className={css.wrapper}>
        <motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1,transition:{ease:"easeInOut",delay:0.9, type:'spring'}}} className={css.container}>
          <span style={{color:'#D4AF37'}}>Top Rated</span>
          <span>
          Savi Ruchi's Chefless Frozen Gravy Paste Ready in 10 Minutes.
          </span>
        </motion.div>

        <motion.img initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1,transition:{ease:"easeInOut",delay:0.7, type:'spring'}}} src={logo} alt="" />
          
        <motion.div initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1,transition:{ease:"easeInOut",delay:1, type:'spring'}}} className={css.container}>
          <span style={{color:'#D4AF37'}}>50+</span>
          <span>Happy Customers with us</span>
        </motion.div>
      </div>

      <div className={css.reviews} style={{color:'#D4AF37'}}>Reviews</div>

      <motion.div initial={{opacity:1,scale:0.9}} whileInView={{opacity:1,scale:1,transition:{ease:"easeInOut",delay:1.2, type:'spring'}}} className={css.carousel}>
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
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
