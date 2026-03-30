"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function HeroComponent() {
  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const leftInfoRef = useRef(null);
  const rightInfoRef = useRef(null);

  const hiRef = useRef(null);
  const aliviaRef = useRef(null);
  const daianaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.set([leftInfoRef.current, rightInfoRef.current], { opacity: 0, y: 60 });

    // Background
    tl.fromTo(
      bgRef.current,
      { scale: 1.4 },
      { scale: 1, duration: 1.2, ease: "power2.inOut" },
    )

      // Menu & Logo
      .fromTo(
        menuRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2 },
        "-=0.6",
      )

      // "Hi, I am"
      .to(
        hiRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4",
      )

      // "Alivia"
      .to(
        aliviaRef.current.querySelectorAll(`.${styles.char}`),
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.5",
      )

      // "Daiana"
      .to(
        daianaRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5",
      )

      // 5. Middle texts
      .to(
        leftInfoRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.4",
      )
      .to(
        rightInfoRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6",
      );

    return () => tl.kill(); // Cleanup
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className={styles.char_mask}>
        <span className={styles.char}>{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  return (
    <div className="hero_overflow_fix">
      <div ref={bgRef} className="bg">
        <div className={styles.t_container}>
          <div ref={menuRef} className={styles.menu_container}>
            <div className={styles.logo}>Alivia</div>
            <div className={styles.menu}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>

          <div className={styles.about_text_container}>
            <div className={styles.about_text}>
              <div className={styles.left_side}>
                <div ref={leftInfoRef} className={styles.left_side_text}>
                  Branding / Design / UI/UX / Strategy /
                </div>
              </div>
              <div ref={rightInfoRef} className={styles.right_side}>
                <img
                  className={styles.right_side_img}
                  src="/images/world.svg"
                  alt="world"
                />
                <div className={styles.right_side_text}>
                  Based in Amsterdam the Dutch capital
                </div>
              </div>
            </div>
          </div>

          <div className={styles.alivia_text_container}>
            {/* Masked "Hi, I am" */}
            <div className={styles.text_mask}>
              <div ref={hiRef} className={styles.alivia_left_text_anim}>
                Hi, I am
              </div>
            </div>

            {/* Split "Alivia" */}
            <div ref={aliviaRef} className={styles.alivia_text_main}>
              {splitText("Alivia")}
            </div>

            {/* Masked "Daiana" */}
            <div className={styles.text_mask}>
              <div ref={daianaRef} className={styles.alivia_right_text_anim}>
                Daiana
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
