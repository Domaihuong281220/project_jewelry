import { card, gemstone } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      The "Art of Nature" series. <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Hemmerle's Tarantula brooch (1995), from the "Art of Nature" series.
       The body is made up of a 111.76ct dark brown conch pearl - one of the largest and rarest ever found -
        and 39.84ct natural coloured fancy shaped Umba sapphires.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={gemstone} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
