import React, { useEffect, useState } from "react";
import css from "./Hero.module.css";
// import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import savi1 from './images/image_5-removebg-preview.png'
import savi2 from './images/image_3-removebg-preview.png'
import savi3 from './images/image_4-removebg-preview.png'
const Hero = () => {
  const data=[
{img:savi1,id:0},
{img:savi2,id:1},
{img:savi3,id:2}
]

  const [image,setImage]=useState(0)
  const handleSetImage=()=>{
    setImage((image)=>(image+1)%data.length)
  }
  useEffect(()=>{
    const timer=setTimeout(()=>{
      handleSetImage()
      console.log(image)
    },3000);
    return ()=>clearTimeout(timer)
  },[image])
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1} style={{color:'#D4AF37'}}>Savi Ruchi Ready To Cook Masala Paste</span>

        <div className={css.text2}>
          <span style={{color:'#D4AF37'}}>Effortless Cooking</span>
          <span className="text-white bg-white">
          Savi Ruchi's Chefless Frozen Gravy Paste Ready in 10 Minutes
          </span>
        </div>
      </div>

      {/* main image with cirlce back */}
      <div className={css.wrapper}>
    
      
        <motion.div
          initial={{ bottom: !mobile && "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>
         {data.map((data,index)=>(
          <>
          <motion.img
          initial={{ bottom: !mobile && "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={data.img}
        alt=""
        style={Number(image)===Number(data.id) ? {display:'block'}:{display:"none"}}
          width={500}
          className={`${data.id===index ? 'block':'hidden'}`}
        />
 
       </>
       ))} 
        <motion.div
          initial={{ right: !mobile && "4%" }}
          whileInView={{ right: !mobile && "2%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill style={{color:'black'}}/>
          <div className={css.signup}>
            {/* <span>Best Signup Offers</span> */}
            <span>Contact us.</span>
            <div>
              <a href="#contact">
              <BsArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          {/* <span style={{color:'#FFD700'}}>1.5m</span> */}
          <span style={{color:'#D4AF37'}}>Frozen Delights</span>
        </div>

        <div className={css.customers}>
          <span style={{color:'#D4AF37'}}>50+</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
