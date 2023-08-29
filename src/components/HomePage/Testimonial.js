"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { axiosApi } from "@/axios";

export default function Testimonial({ data }) {
  return (
    <>
      <section className="testimonial_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text text-white">Testimonial</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="w3-agile-test-monials" id="testimonials">
              <div className="client-review-head">
                <div className="sreen-gallery-cursual">
                  <div id="owl-demo" className="owl-carousel">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      followFinger={true}
                      parallax="true"
                      grabCursor="true"
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      {data?.map((data, ind) => {
                        return (
                          <SwiperSlide>
                            {" "}
                            <div className="item-owl">
                              <div className="test-review">
                                <p>
                                  <img
                                    src="images/left-quotes.png"
                                    alt="Left Quote"
                                  />
                                  {data?.quotation}
                                  <img
                                    src="images/right-quotes.png"
                                    alt="Right Quote"
                                  />
                                </p>
                                <h5 className="testimonial_name">
                                  {data?.writer}
                                </h5>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
