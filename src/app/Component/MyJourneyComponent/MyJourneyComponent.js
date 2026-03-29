import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./MyJourneyComponent.module.css";

export default function ProjectComponent() {
  return (
    <div className={styles.journey_component}>
      <div className={styles.area}>
        <div className={styles.journey}>
          <img src="/images/journey.webp" />
        </div>
        <div className={styles.play}>
          <div className={styles.play_container}>
            <div className={styles.icon}>
              <img src="/images/play.svg" />
            </div>
            <div className={styles.detail}>
              <div className="watch">Watch</div>
              <div className={styles.my_journey}>My Journey</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
