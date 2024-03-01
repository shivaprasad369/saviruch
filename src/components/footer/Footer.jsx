import React from "react";
import Logo from "../../assets/HS.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div
          className={css.logo}
          style={{ display: "flex ", flexDirection: "column" }}
        >
          <img src={Logo} alt="" />
          <h1 style={{ fontSize: "1rem", letterSpacing: "0.1rem" }}>
            Savi Ruchi <br />
            Ready To Cook <br /> Masala Paste
          </h1>
          {/* <span style={{color:'#FFD700',fontSize:'1.3rem'}}>Savi Ruchi</span> */}
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span style={{ color: "#D4AF37" }}>Contact Us</span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <LocationMarkerIcon className={css.icon} />
              <span>
                {" "}
                Basel Mission compound, PB Rd, Hubballi, Karnataka 580029
              </span>
            </span>

            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="tel:073491 02049">+91 73491 02049</a>
            </span>

            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <InboxIcon className={css.icon} />
              <a href="mailto:saviruchi@gmail.com ">saviruchi@gmail.com</a>
            </span>
          </div>
        </div>

        {/* <div className={css.block}>
          <div className={css.detail}>
            <span style={{color:'#D4AF37'}}>Account</span>
            <span className={css.pngLine} style={{display:'flex ', gap:'0.5rem'}}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div> */}

        <div className={css.block}>
          <div className={css.detail}>
            <span style={{ color: "#D4AF37" }}>Company</span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              {/* <UsersIcon className={css.icon} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <a href="#home">
                <p>Home</p>
              </a>
            </span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <UsersIcon className={css.icon} />
              <a href="#about">
                <p>About us</p>
              </a>
            </span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>

              <a href="#product">
                <p>Products</p>
              </a>
            </span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>

              <a href="#contact">
                <p>Contact</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span style={{ color: "#D4AF37" }}>Resources</span>
            <span
              className={css.pngLine}
              style={{ display: "flex ", gap: "0.5rem" }}
            >
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2024 by Unitechno software development, Inc.</span>
        <span>All rights reserved. </span>
      </div>
    </div>
  );
};

export default Footer;
