import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStared";
const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {"  "}
          <span className="text-white">1 Month </span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold font-poppins ss:text-7xl text-5xl text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
          <br />
        </h1>
        <div className="ss:flex hidden md:ml-4 ml-0 md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-semibold font-poppins ss:text-[68px] text-5xl text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-lg mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center md:my-0 my-10  md:mt-0 mt-9 relative">
      <img className="w-full h-full relative z-[5]" src={robot} alt="" />
      <div className="absolute z-[0] w-2/5 h-1/3 top-0 pink__gradient" />
      <div className="absolute z-[1] w-4/5 h-4/5 rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-1/2 h-1/2 right-15 bottom-20 blue__gradient" />
    </div>
    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
