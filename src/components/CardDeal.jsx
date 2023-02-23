import React from "react";
import { card } from "../assets";
import styles from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="flex flex-1 items-center justify-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CardDeal;
