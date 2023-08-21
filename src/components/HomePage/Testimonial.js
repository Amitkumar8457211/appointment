"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { axiosApi } from "@/axios";

export default function Testimonial() {
  const [first, setfirst] = useState([]);
  const getTestimonial = async () => {
    const res = await axiosApi(`/home/testimonial`);
    console.log(res.data.responseWrapper.data);
    if (res?.data?.responseWrapper?.statusDescription?.statusCode == 200) {
      setfirst(res.data.responseWrapper.data);
    }
  };

  useEffect(() => {
    getTestimonial();
  }, []);

  const testimonialArr = [
    {
      left: "images/left-quotes.png",
      text: " A nice comfortable place to stay with much more to it. With 24/7 open Recreation Centre I look  forward to the fun-filled activities which is a nice break from the college stress.",
      right: "images/right-quotes.png",
      author: "Shyam",
    },
    {
      left: "images/left-quotes.png",
      text: "  Singing, stand-up comedy and story slams are performed by people from various clubs as well as people living here. It’s motivating to be surrounded by such people.",
      right: "images/right-quotes.png",
      author: "Anmol",
    },
    {
      left: "images/left-quotes.png",
      text: "You can get everything in life you want if you will just help enough other people get what they want ",
      right: "images/right-quotes.png",
      author: "Paras",
    },
    {
      left: "images/left-quotes.png",
      text: " 'Learn something new today'. 'Good thoughts make a happy person'. 'If you have a dream, never let go of it, chase it till the end'. 'Make yourself your own competition, strive to be better than yesterday, and you'll find the true essence of life! ",
      right: "images/right-quotes.png",
      author: "Nikhil",
    },
  ];
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
                      {first?.map((data, ind) => {
                        return (
                          <>
                            <SwiperSlide key={ind}>
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
                          </>
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
