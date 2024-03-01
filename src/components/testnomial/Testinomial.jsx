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
    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0,transition:{ease:"easeIn",delay:0.5, type:'spring'}}} className={css.testimonials}>
      <div className={css.wrapper}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{ease:"easeIn",delay:0.9, type:'spring'}}} className={css.container}>
          <span style={{color:'#D4AF37'}}>Top Rated</span>
          <span>
          Savi Ruchi's Chefless Frozen Gravy Paste Ready in 10 Minutes.
          </span>
        </motion.div>

        <motion.img initial={{opacity:0}} whileInView={{opacity:1,transition:{ease:"easeIn",delay:0.7, type:'spring'}}} src={logo} alt="" />
          
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{ease:"easeIn",delay:1, type:'spring'}}} className={css.container}>
          <span style={{color:'#D4AF37'}}>50+</span>
          <span>Happy Customers with us</span>
        </motion.div>
      </div>

      <div className={css.reviews} style={{color:'#D4AF37'}}>Reviews</div>

      <motion.div initial={{opacity:1}} whileInView={{opacity:1,transition:{ease:"easeIn",delay:1.2, type:'spring'}}} className={css.carousel}>
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
              <motion.div whileHover={{scale:1.1,transition:{type:'spring',delay:0.3}}} className={css.testimonial} key={i} style={{color:'black'}}>
              <Avatar className="img" src="/broken-image.jpg" sx={{height:70, width:70}} />
                <span>{testimonial.comment}</span>
                <hr />
                
                <span>{testimonial.name}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
