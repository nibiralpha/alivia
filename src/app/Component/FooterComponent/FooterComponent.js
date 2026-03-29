import styles from "./Footer.module.css";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";

export default function FooterComponent() {
  const menu = ["FB", "BE", "LI"];
  return (
    <div className={styles.footer}>
      <SectionHeadingComponent
        name={"/ (+88) 016 772 46604"}
        number={
          <div className={styles.menu_wrapper}>
            {menu.map((item, index) => (
              <span key={index} className={styles.menu_item}>
                {item}
                {index < menu.length - 1}{" "}
              </span>
            ))}
          </div>
        }
        mbottom={"100px"}
      />

      <div className={styles.main}>
        {/* <div className={styles.year}>2025</div> */}
        <div className={styles.alivia}>Alivia</div>
        <div className={styles.copyright}>C</div>
      </div>
    </div>
  );
}
