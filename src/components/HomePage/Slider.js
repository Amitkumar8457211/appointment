"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import Callceneter1 from "../../../public/images/call_center.jpg";
import Callceneter2 from "../../../public/images/call_center2.jpg";

export default function TopSlider() {
  return (
    <>
      {" "}
      <section className="banner_section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* <div className="carousel-inner">
              <div className="carousel-item slide_1 active">
                <div className="carousel-caption d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item slide_2">
                <div className="carousel-caption d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
            </div> */}
            <SwiperSlide>
              <img src={Callceneter1.src} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Callceneter2.src} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
