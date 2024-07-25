import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} ml-6 mr-6 sm:flex-row  flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col items-center  ">
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p
        className={`" ml-16 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left sm:mr-10 mr-6 max-w-[450px]"`}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={"sm:mr-10 mr-12"} />
    </div>
  </section>
);

export default CTA;
