"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonial.module.css";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialComponent() {
  const headingTextRef = useRef(null);
  const sliderRef = useRef(null);
  const detailRef = useRef(null);
  const boxRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  useEffect(() => {
    const headingText = headingTextRef.current;
    const sliderContainer = sliderRef.current;
    const detaliContainer = detailRef.current;
    const boxContainer = boxRef.current;

    // HEADING TEXT
    gsap.fromTo(
      headingText,
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
          trigger: headingText,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
    
    // SLIDER
    gsap.fromTo(
      sliderContainer,
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
          trigger: sliderContainer,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
    
    // Details
    gsap.fromTo(
      detaliContainer,
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
          trigger: detaliContainer,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
    
    // Box 
    gsap.fromTo(
      boxContainer,
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
          trigger: boxContainer,
          start: "top 98%",
          toggleActions: "play none none none",
        },
      },
    );
    return () => {};
  }, []);
  return (
    <div className={styles.testimonial_component}>
      <SectionHeadingComponent
        name={"/ TESTIMONIALS"}
        number="N.05"
        mbottom={"100px"}
      />

      <div className={styles.testimonial}>
        <div className={styles.right}>
          <div ref={headingTextRef} className={styles.heading}>
            Our results speak volumes—discover what clients say about partnering
            with us.
          </div>
          <div ref={sliderRef} className="slider">
            {/* <Slider {...settings}> */}
            <div className={styles.slide}>
              <div className="img">
                <img
                  className={styles.main_image}
                  src="/images/testimonial3.jpg"
                />
                <div className="right_corner">
                  <div className="blocks">
                    <div className="big_blocks"></div>
                    <div className="small_blocks"></div>
                  </div>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.top}>
                  <div className={styles.position}>/01</div>
                  <div className={styles.position}>+</div>
                </div>
                <div className={styles.details}>
                  Exceptional creativity and strategy that significantly
                  elevated our brand’s overall digital presence and impact.
                </div>
                <div className={styles.name_area}>
                  <div className={styles.name_container}>
                    <div className={styles.name}>Maria Gomez</div>
                    <div className={styles.position}>Designer at Flowless</div>
                  </div>
                  {/* <div className={styles.button_container}>
                    <div className={styles.button}>
                      <img
                        className={styles.main_image}
                        src="/images/next.svg"
                      />
                    </div>
                    <div className={styles.button}>
                      <img
                        className={styles.main_image}
                        src="/images/next.svg"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div>
                <h3>2</h3>
              </div> */}
            {/* </Slider> */}
          </div>

          <div ref={detailRef} className={styles.detals_section}>
            <div className={styles.percentange}>96%</div>
            <div className={styles.detals}>
              <div className={styles.satisfied}>13k+ Satisfied Clients</div>
              <div className={styles.client}>Avg 4.9 rating</div>
            </div>
          </div>
        </div>
      </div>
      <div ref={boxRef} className={styles.box_area}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={"/images/client_logo_1.png"} />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={"/images/client_logo_2.png"} />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={"/images/client_logo_3.png"} />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={"/images/client_logo_4.png"} />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={"/images/client_logo_5.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}
