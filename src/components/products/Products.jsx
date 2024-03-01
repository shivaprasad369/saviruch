import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { motion } from "framer-motion";

const Products = () => {
  const [parent] = useAutoAnimate()

  const [MenuProducts, setMenuProducts] = useState(ProductsData)
const [clr,setClr]=useState('all')
  const filter = (type)=> {
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
    setClr(type)
  }


  return (
    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0,transition:{delay:0.7,type:'spring'}}} className={css.container} id="product">
      <img src={Plane} alt="" />
      <h1 style={{color:'#D4AF37'}}>Our Products</h1>
      <div className={css.products}>
        <ul className={css.menu} style={{color:'#D4AF37'}}>
          <li className={clr==='all'? 'acitive':""} onClick={()=>{setMenuProducts(ProductsData);} }><span style={clr==='all'? {borderBottom:'2px solid red'}:""}>All</span></li>
          <li className={clr==='skin care'? 'acitive':""} onClick={()=>filter('skin care')}> Veg Masala's</li>
          <li className={clr==='conditioner'? 'acitive':""} onClick={()=>filter('conditioner')}>Chicken Masala's</li>
          <li className={clr==='foundation'? 'acitive':""} onClick={()=>filter('foundation')}>Fish Masala's</li>
          <li className={clr==='mutton'? 'acitive':""} onClick={()=>filter('mutton')}>Mutton Masala's</li>
        </ul>
        <div className={css.list} ref={parent} style={{color:'black'}}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div>Order Now</div>
              </div>

              <img src={product.img} alt=""className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
