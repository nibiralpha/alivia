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
  const containerRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text Animations
      gsap.from([talkRef.current, discussRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: talkRef.current,
          start: "top 98%",
        },
      });

      const mm = gsap.matchMedia();

      // This code only runs if the screen width is 1024px or larger
      mm.add("(min-width: 1024px)", () => {
        // Image Fan-out Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        tl.to(
          leftImgRef.current,
          {
            rotation: -15,
            x: -90,
            ease: "none",
          },
          0,
        );

        tl.to(
          rightImgRef.current,
          {
            rotation: 15,
            x: 90,
            ease: "none",
          },
          0,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.discuss}>
      <div className={styles.start_section}>
        <div ref={talkRef} className={styles.title}>
          Anything in Mind? Let’s Talk
        </div>
        <div ref={discussRef} className={styles.discuss_button}>
          <div className={styles.button}>Let's Discuss</div>
        </div>
      </div>
      <div className={styles.images}>
        <img
          ref={leftImgRef}
          className={styles.left_img}
          src="/images/CTA_Image_3.webp"
          alt="left"
        />
        <img
          className={styles.center_img}
          src="/images/Personal_Portrait.webp"
          alt="center"
        />
        <img
          ref={rightImgRef}
          className={styles.right_img}
          src="/images/CTA_Image_2.webp"
          alt="right"
        />
      </div>
    </div>
  );
}
