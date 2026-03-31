"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./Project.module.css";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function ProjectComponent() {
  const componentRef = useRef(null);
  const galleryRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. The Pinning Logic
      ScrollTrigger.create({
        trigger: firstImageRef.current,
        start: "top 10%",
        endTrigger: galleryRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      // 2. The Scale Down Logic
      // Animates the image from its original size to 70% width/height
      gsap.to(firstImageRef.current.querySelector(`.${styles.img}`), {
        scale: 0.6, // Adjust this number to determine how small it gets
        ease: "none",
        scrollTrigger: {
          trigger: firstImageRef.current,
          start: "top 10%", // Starts scaling when pinning begins
          end: "top -50%", // Finishes scaling after scrolling a bit
          scrub: true, // Smoothly follows the scrollbar
        },
      });

      // 3. The Pinning Logic
      ScrollTrigger.create({
        trigger: secondImageRef.current,
        start: "top 25%",
        endTrigger: galleryRef.current,
        end: "bottom -50%",
        pin: true,
        pinSpacing: false,
      });

      // 4. The Scale Down Logic
      // Animates the image from its original size to 70% width/height
      gsap.to(secondImageRef.current.querySelector(`.${styles.img}`), {
        scale: 0.7, // Adjust this number to determine how small it gets
        ease: "none",
        scrollTrigger: {
          trigger: secondImageRef.current,
          start: "top 25%", // Starts scaling when pinning begins
          end: "top -50%", // Finishes scaling after scrolling a bit
          scrub: true, // Smoothly follows the scrollbar
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className={styles.project_component}>
      <SectionHeadingComponent
        name={"/ PROJECT"}
        number={"N.02"}
        mbottom={"100px"}
        mtop={"50px"}
      />

      <div ref={galleryRef} className={styles.gallary}>
        <div className={styles.year}>(19-25)</div>
        <div className={styles.images}>
          {/* First image with the Ref for pinning */}
          <div ref={firstImageRef} className={styles.image} id="img1">
            <img
              className={styles.img}
              src="/images/project_main_image.webp"
              alt="Runo"
            />
            <div className={styles.project_detail}>
              <div className="name">Runo</div>
              <div className="project_year">/2025</div>
            </div>
          </div>

          <div ref={secondImageRef} className={styles.image} id="img2">
            <img
              className={styles.img}
              src="/images/project_main_image2.webp"
              alt="Biofix"
            />
            <div className={styles.project_detail}>
              <div className="name">Biofix</div>
              <div className="project_year">/2025</div>
            </div>
          </div>

          <div className={styles.image} id="img3">
            <img
              className={styles.img}
              src="/images/project_main_image3.webp"
              alt="Sukim"
            />
            <div className={styles.project_detail}>
              <div className="name">Sukim</div>
              <div className="project_year">/2025</div>
            </div>
          </div>

          <div className={styles.image}>
            <img
              className={styles.img}
              src="/images/project_main_image4.webp"
              alt="Arca"
            />
            <div className={styles.project_detail}>
              <div className="name">Arca</div>
              <div className="project_year">/2025</div>
            </div>
          </div>
        </div>

        <div className={styles.explore}>
          <div className="text">Explore All</div>
          <div className="button">
            <img src="/images/next.svg" alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
}
