import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./About.module.css";

export default function AboutComponent() {
  return (
    <div className={styles.about_component}>
      <SectionHeadingComponent
        name={"/ ABOUT"}
        number={"N.01"}
        mbottom={"100px"}
        mtop={"50px"}
      />
      <div className={styles.start}>
        <div className={styles.left}>
          <img src="/images/Personal_Portrait.webp" />
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            I’m an award-winning UI/UX designer shaping impactful digital
            products from Amsterdam.
          </div>
          <div className={styles.exp}>
            <div className={styles.status}>
              <div className={`${styles.years} ${styles.heading}`}>13+</div>
              <div className={styles.title}>Experience</div>
              <div className={styles.detail}>Deliver with excellence</div>
            </div>

            <div className={styles.status}>
              <div className={`${styles.years} ${styles.heading}`}>290+</div>
              <div className={styles.title}>Completed</div>
              <div className={styles.detail}>Projects that speak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
