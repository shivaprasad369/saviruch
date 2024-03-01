import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import {useAutoAnimate} from '@formkit/auto-animate/react'
const Products = () => {
  const [parent] = useAutoAnimate()

  const [MenuProducts, setMenuProducts] = useState(ProductsData)

  const filter = (type)=> {
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
  }


  return (
    <div className={css.container} id="product">
      <img src={Plane} alt="" />
      <h1 style={{color:'#D4AF37'}}>Our Products</h1>
      <div className={css.products}>
        <ul className={css.menu} style={{color:'#D4AF37'}}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter('skin care')}>Veg Masala's</li>
          <li onClick={()=>filter('conditioner')}>Chicken Masala's</li>
          <li onClick={()=>filter('foundation')}>Fish Masala's</li>
          <li onClick={()=>filter('mutton')}>Mutton Masala's</li>
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
                <div>Order   Now</div>
              </div>

              <img src={product.img} alt=""className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
