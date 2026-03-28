import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./Discuss.module.css";

export default function ProjectComponent() {
  return (
    <div className={styles.discuss}>
      <div className={styles.start_section}>
        <div className={styles.title}>Anything in Mind? Let’s Talk</div>
        <div className={styles.discuss_button}>
          <div className={styles.button}>Let's Discuss</div>
        </div>
      </div>
      <div className={styles.images}>
        <img className={styles.left_img} src="/images/CTA_Image_3.webp" />
        <img className={styles.center_img} src="/images/Personal_Portrait.webp" />
        <img className={styles.right_img} src="/images/CTA_Image_2.webp" />
      </div>
    </div>
  );
}
