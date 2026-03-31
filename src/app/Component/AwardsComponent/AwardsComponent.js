"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Awards.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AwardsComponent() {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const images = gsap.utils.toArray(`.${styles.images} img`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      images.forEach((img, i) => {
        if (i > 0) {
          tl.to(img, {
            opacity: 1, 
            ease: "none",
            duration: 1,
          });
        }
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className={styles.awards_component}>
      <div className={styles.awards}>
        <div className={styles.images}>
          <img src="/images/Award_Image_1.avif" alt="1" />
          <img src="/images/main_image.webp" alt="2" />
          <img src="/images/Award_Image_2.webp" alt="3" />
          <img src="/images/Placeholder Image.webp" alt="4" />
        </div>

        {/* The Text Content */}
        <div className={styles.top_bar}>
          <div className={styles.top_texts}>/ AWARDS</div>
          <div className={styles.top_texts}>N. 04</div>
        </div>

        <div className={styles.bottom_title}>
          <div className={styles.title}>Fiona</div>
        </div>
        <div className={styles.moblie_details_bar}>
          <div className={styles.mobile_year}>2024</div>
          <div className={styles.mobile_texts}>Best Minimal Design</div>
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
