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
                  <div className="name_container">
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

          <div className={styles.detals_section}>
            <div className={styles.percentange}>96%</div>
            <div className={styles.detals}>
              <div className={styles.satisfied}>13k+ Satisfied Clients</div>
              <div className={styles.client}>Avg 4.9 rating</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box_area}>
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
