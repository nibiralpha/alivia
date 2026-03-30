"use client";

import { useEffect, useRef } from "react";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./About.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutComponent() {

  const aboutTextRef = useRef(null);
  const aboutImgRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const aboutText = aboutTextRef.current;
    const aboutImg = aboutImgRef.current;
    const experience = experienceRef.current;

    gsap.fromTo(
      aboutText,
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
          trigger: aboutText,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
    
    gsap.fromTo(
      aboutImg,
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
          trigger: aboutImg,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      },
    );
    
    gsap.fromTo(
      experience,
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
          trigger: experience,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className={styles.about_component}>
      <SectionHeadingComponent
        name={"/ ABOUT"}
        number={"N.01"}
        mbottom={"100px"}
        mtop={"50px"}
      />
      <div className={styles.start}>
        <div ref={aboutImgRef} className={styles.left}>
          <img src="/images/Personal_Portrait.webp" />
        </div>
        <div className={styles.right}>
          <div ref={aboutTextRef} className={styles.heading}>
            I’m an award-winning UI/UX designer shaping impactful digital
            products from Amsterdam.
          </div>
          <div ref={experienceRef} className={styles.exp}>
            <div className={styles.status}>
              <div className={`${styles.years} ${styles.heading}`}>13+</div>
              <div className={styles.title}>Experience</div>
              <div className={styles.detail}>Deliver with excellence</div>
            </div>

            <div className={styles.status}>
              <div className={`${styles.years} ${styles.heading}`}>290+</div>
              <div className={styles.title}>Completed</div>
              <div className={styles.detail}>Projects that speak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
