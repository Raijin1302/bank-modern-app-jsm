import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-row justify-start items-center flex-1 m-3"
        >
          <h4 className="text-white font-poppins font-semibold xs:text-4xl text-3xl xs:leading-10 leading-9">
            {stat.value}
          </h4>
          <p className="text-gradient font-poppins font-normal xs:text-xl text-lg xs:leading-7 leading-5 uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
