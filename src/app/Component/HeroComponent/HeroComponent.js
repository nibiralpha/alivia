"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function HeroComponent() {
  const bgRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // Background image animation
    gsap.fromTo(
      bgRef.current,
      { scale: 1.4 },
      {
        scale: 1,
        duration: 0.8,
        ease: "power2.in",
      },
    );

    // Menu and logo animation
    gsap.fromTo(
      menuRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      },
    );
  }, []);

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

          {/* Rest of your content remains the same */}
          <div className={styles.about_text_container}>
            <div className={styles.about_text}>
              <div className={styles.left_side}>
                <div className={styles.left_side_text}>
                  Branding / Design / UI/UX / Strategy /
                </div>
              </div>
              <div className={styles.right_side}>
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
            <div className={styles.alivia_left_text}>Hi, I am</div>
            <div className={styles.alivia_text}>Alivia</div>
            <div className={styles.alivia_right_text}>Daiana</div>
          </div>
        </div>
      </div>
    </div>
  );
}
