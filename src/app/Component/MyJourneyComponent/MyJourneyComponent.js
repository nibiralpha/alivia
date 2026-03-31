"use client";

import { useEffect, useRef } from "react";
import styles from "./MyJourneyComponent.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectComponent() {
  const journeyRef = useRef(null);

  useEffect(() => {
    const journeySection = journeyRef.current;

    gsap.fromTo(
      journeySection,
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
          trigger: journeySection,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div ref={journeyRef} className={styles.journey_component}>
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
