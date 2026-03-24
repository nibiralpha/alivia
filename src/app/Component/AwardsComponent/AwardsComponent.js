"use client";

import { useEffect } from "react";
import styles from "./Awards.module.css";

export default function AwardsComponent() {
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";

    return () => {
      // document.documentElement.style.overflowX = 'auto';
    };
  }, []);
  return (
    <div className={styles.awards_component}>
      <div className={styles.awards}>
        <div className={styles.images}>
          <img src="/images/main_image.webp" />
          <img src="/images/Award_Image_1.avif" />
          <img src="/images/Award_Image_2.webp" />
          <img src="/images/Placeholder Image.webp" />
        </div>
        <div className={styles.top_bar}>
          <div className={styles.top_texts}>/ AWARDS</div>
          <div className={styles.top_texts}>N. 04</div>
        </div>

        <div className={styles.bottom_title}>
          <div className={styles.title}>Fiona</div>
        </div>

        <div className={styles.bottom_bar}>
          <div className={styles.bottom_texts}>01</div>
          <div className={styles.bottom_texts}>2024</div>
          <div className={styles.bottom_texts}>Best Minimal Design</div>
        </div>
      </div>
    </div>
  );
}
