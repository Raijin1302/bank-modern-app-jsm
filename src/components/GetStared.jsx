import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-lg leading-6 mr-1">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="" className="w-6 h-6 object-contain" />
      </div>
      <p className="font-poppins font-medium text-lg leading-6">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
