"use client";

import { useEffect, useRef } from "react";
import styles from "./Discuss.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectComponent() {

   const talkRef = useRef(null);
   const discussRef = useRef(null);

  useEffect(() => {
    const talkSection = talkRef.current;
    const discussSection = discussRef.current;

    // Lets talk
    gsap.fromTo(
      talkSection,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: talkSection,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );

    // Discuss button
    gsap.fromTo(
      discussSection,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: discussSection,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className={styles.discuss}>
      <div className={styles.start_section}>
        <div ref={talkRef} className={styles.title}>Anything in Mind? Let’s Talk</div>
        <div ref={discussRef} className={styles.discuss_button}>
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
