"use client";

import { useEffect } from "react";
import styles from "./Testimonial.module.css";
import SectionHeadingComponent from "../SectionHeadingComponent/SectionHeadingComponent";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
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
          <div className={styles.heading}>
            Our results speak volumes—discover what clients say about partnering
            with us.
          </div>
          <div className="slider">
            <Slider {...settings}>
              <div className={styles.slide}>
                <div className="img">
                  <img className="main_image" src="/images/testimonial3.jpg" />
                  <div className="right_corner"></div>
                </div>
                <div className="contents">
                  <div className="top">
                    <div className="number">01</div>
                    <div className="icon">+</div>
                  </div>
                  <div className="details">
                    Exceptional creativity and strategy that significantly
                    elevated our brand’s overall digital presence and impact.
                  </div>
                  <div className="name_area">
                    <div className="name_container">
                      <div className="name">Maria Gomez</div>
                      <div className="position">Designer at Flowless</div>
                    </div>
                    <div className="button_container">
                      <div className="button"></div>
                      <div className="button"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <h3>2</h3>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
