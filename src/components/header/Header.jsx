import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/HS.png";
// import { CgShoppingBag, } from "react-icons/cg";
// import {GoThreeBars} from 'react-icons/go'
const Header = () => {

  // const [ShowMenu, setShowMenu] = useState(true)
  // const toggleMenu = ()=> {
  //   setShowMenu((ShowMenu)=>!ShowMenu)
  // }

  return (
    <div className={css.container} id="home">
      <div className={css.logo}>
        <img src={Logo} alt="" />
        {/* <span style={{fontSize:'2rem',fontFamily:'serif',fontWeight:900,color:'#FFD700'}}></span> */}
      </div>

      {/* <div className={css.right}> */}
        {/* <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars/>
        </div> */}
        {/* <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none'}}>
          <li>Home</li>
          <li>Brands</li>
          <li>Products</li>
          <li>Testinomial</li>
          <li>Contact Us.</li>
        </ul> */}

        {/* <input type="text" placeholder="Search" className={css.search}></input> */}

        {/* <CgShoppingBag className={css.cart} /> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
