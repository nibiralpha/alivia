"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import styles from "./Project.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectComponent() {
  const componentRef = useRef(null);
  const galleryRef = useRef(null);

 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const images = gsap.utils.toArray(`.${styles.image}`);

    images.forEach((img, i) => {
      if (i < images.length - 1) {
        gsap.to(img, {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top 10%",
            end: "+=100%",
            scrub: true,
            pin: true,
            pinSpacing: false,
          }
        });
      }
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
          {/* Project 1 */}
          <div className={styles.image}>
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

          {/* Project 2 */}
          <div className={styles.image}>
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

          {/* Project 3 */}
          <div className={styles.image}>
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

          {/* Project 4  */}
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
