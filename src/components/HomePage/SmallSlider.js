"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function SmallSlider() {
  const imagsArr = [
    { img: "images/w1.png" },
    { img: "images/w2.png" },
    { img: "images/w3.png" },
    { img: "images/w4.png" },
  ];

  return (
    <>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="title_small">
                <span className="blue_text">Our</span>
                <br />
                Technology
                <br />
                Partners
              </div>
            </div>
            <div className="col-md-10">
              <div className="partners_logos slider">
                {/* {imagsArr?.map((e, i) => {
                  return (
                    <> */}
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w1.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w2.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w3.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w4.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w1.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide">
                      <img src="/images/w2.png" alt="Partner Logo 1" />
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* </>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
