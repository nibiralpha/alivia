import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./Expertise.module.css";

export default function ExpertiseComponent() {
  return (
    <div className={styles.expertise_component}>
      <SectionHeadingComponent
        name={"/ EXPERTISE"}
        number={"N.03"}
        mbottom={"100px"}
        mtop={"50px"}
      />

      <div className={styles.expertise}>
        <div className={styles.right}>
          <div className={styles.heading}>
            Professional services I offer to help you achieve meaningful and
            lasting results
          </div>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.iconArea}>
                <img src="/images/expertise.svg" />
              </div>
              <div className={styles.footer_area}>
                <div className={styles.title}>Design</div>
                <div className={styles.count}>
                  <div className={styles.number}>/01</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.iconArea}>
                <img src="/images/expertise2.svg" />
              </div>
              <div className={styles.footer_area}>
                <div className={styles.title}>Development</div>
                <div className={styles.count}>
                  <div className={styles.number}>/02</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.iconArea}>
                <img src="/images/expertise3.svg" />
              </div>
              <div className={styles.footer_area}>
                <div className={styles.title}>Branding</div>
                <div className={styles.count}>
                  <div className={styles.number}>/03</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.iconArea}>
                <img src="/images/expertise4.svg" />
              </div>
              <div className={styles.footer_area}>
                <div className={styles.title}>Art Direction</div>
                <div className={styles.count}>
                  <div className={styles.number}>/04</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
