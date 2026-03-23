import styles from "./Hero.module.css";

export default function HeroComponent() {
  return (
    <div className={styles.t_container}>
      <div className={styles.menu_container}>
        <div className={styles.logo}>Alivia</div>
        <div className={styles.menu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      
      <div className={styles.about_text_container}>
        <div className={styles.about_text}>
          <div className={styles.left_side}>
            <div className={styles.left_side_text}>Branding / Deisng / UI/UX / Strategy /</div>
          </div>
          <div className={styles.right_side}>
            <img className={styles.right_side_img} src="/images/world.svg" />
            <div className={styles.right_side_text}>Based in Amsterdam the Dutch capital</div>
          </div>
        </div>
      </div>

      <div className={styles.alivia_text_container}>
        <div className={styles.alivia_left_text}>Hi, I am</div>
        <div className={styles.alivia_text}>Alivia</div>
        <div className={styles.alivia_right_text}>Daiana</div>
      </div>
      
    </div>
  );
}
