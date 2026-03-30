"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Heading.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionHeadingComponent({
  name,
  number,
  mbottom,
  mtop,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;

    gsap.fromTo(
      el,
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
          trigger: el,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div
      ref={headingRef}
      style={{
        marginTop: mtop,
        paddingBottom: mbottom,
      }}
    >
      <div className={styles.heading}></div>
      <div className={styles.detail}>
        <div>{name}</div>
        <div>{number}</div>
      </div>
    </div>
  );
}
