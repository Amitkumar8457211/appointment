"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
export default function Testimonial() {
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
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <div className="item-owl">
                          <div className="test-review">
                            <p>
                              <img
                                src="images/left-quotes.png"
                                alt="Left Quote"
                              />
                              A nice comfortable place to stay with much more to
                              it. With 24/7 open Recreation Centre I look
                              forward to the fun-filled activities which is a
                              nice break from the college stress.
                              <img
                                src="images/right-quotes.png"
                                alt="Right Quote"
                              />
                            </p>
                            <h5 className="testimonial_name">Riddhi</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="item-owl">
                          <div className="test-review">
                            <p>
                              <img
                                src="images/left-quotes.png"
                                alt="Left Quote"
                              />
                              Singing, stand-up comedy and story slams are
                              performed by people from various clubs as well as
                              people living here. It’s motivating to be
                              surrounded by such people.
                              <img
                                src="images/right-quotes.png"
                                alt="Right Quote"
                              />
                            </p>
                            <h5 className="testimonial_name">Sandhya</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="item-owl">
                          <div className="test-review">
                            <p>
                              <img
                                src="images/left-quotes.png"
                                alt="Left Quote"
                              />
                              Singing, stand-up comedy and story slams are
                              performed by people from various clubs as well as
                              people living here. It’s motivating to be
                              surrounded by such people.
                              <img
                                src="images/right-quotes.png"
                                alt="Right Quote"
                              />
                            </p>
                            <h5 className="testimonial_name">Sandhya</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="item-owl">
                          <div className="test-review">
                            <p>
                              <img
                                src="images/left-quotes.png"
                                alt="Left Quote"
                              />
                              Singing, stand-up comedy and story slams are
                              performed by people from various clubs as well as
                              people living here. It’s motivating to be
                              surrounded by such people.
                              <img
                                src="images/right-quotes.png"
                                alt="Right Quote"
                              />
                            </p>
                            <h5 className="testimonial_name">Sandhya</h5>
                          </div>
                        </div>
                      </SwiperSlide>
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
