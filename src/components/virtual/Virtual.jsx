import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/Slide/savi ruchi 3.png";
import After from "../../components/hero/images/image_3-removebg-preview.png";
import { motion } from "framer-motion";
const Virtual = () => {
  return (
    <>
      <motion.div initial={{opacity:0,y:-50}} whileInView={{opacity:1, y:0,transition:{delay:0.3,type:'spring'}}} className={css.Virtual} id="about">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1, x:0,transition:{delay:0.6,type:'spring'}}} className={css.left}>
          <span style={{ color: "#D4AF37" }}>About us</span>
          <span>Crafting Culinary Delights Since 2021</span>
          <p style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 ,letterSpacing:'1px'}}>
            Savi Ruchi, where culinary excellence meets convenience. Founded in
            2021 by the dynamic duo Sneha and Hitesh.
            <br />
            <span /> Savi Ruchi has
            revolutionized the culinary landscape with its innovative approach
            to ready-made masala gravy paste with no added colours, chemicals
            and preservatives
<div style={{padding:'0.3rem'}}/>
       Welcome to Savi Ruchi, where culinary innovation meets convenience.
            Established in 2021 by the visionary duo Sneha and Hitesh, we've
            redefined the culinary experience with our pioneering ready-made
            masala gravy paste.      {/* Our products boast purity, with no added colors,
            chemicals, or preservatives, reflecting our unwavering dedication to
            quality and authenticity. Join us on a journey of culinary
            excellence, crafted with passion and commitment since day one. */}
          </p>
          {/* <span style={{ color: "#FFD700" }}>Try Now!</span>
        <img src={Shade} alt="" /> */}
        </motion.div>
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1, x:0,transition:{delay:0.6,type:'spring'}}} className={css.right}>
          <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After}  />
          </div>
        </motion.div>
      </motion.div>
      {/* <p>Driven by a passion for quality and a commitment to authenticity,</p> */}
    </>
  );
};

export default Virtual;
