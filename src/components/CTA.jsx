import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section className="flex items-center justify-center sm:flex-row flex-col sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 bg-black-gradient-2 rounded-2xl box-shadow">
      <div className="flex flex-1  flex-col justify-start items-start text-dimWhite">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-lg my-6`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
