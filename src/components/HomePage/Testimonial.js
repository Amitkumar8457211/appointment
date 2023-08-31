"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Testimonial() {
  const [data, setData] = useState(false);

  // Main Slider

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    delay(100).then(async () => {
      try {
        const response = await axios("http://127.0.0.1:8000/home/all");
        if (response.data.status) {
          setData(response.data.response.testimonial);
        } else {
          setData(false);
        }
      } catch (error) {
        console.log("error", error);
        setData(false);
      }
    });
  }, []);
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
                      // autoplay={{
                      //   delay: 1500,
                      //   disableOnInteraction: false,
                      //   pauseOnMouseEnter: true,
                      // }}
                      followFinger={true}
                      parallax="true"
                      grabCursor="true"
                      // modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      {data.length ? (
                        data?.map((data, ind) => {
                          return (
                            <SwiperSlide key={ind}>
                              {" "}
                              <div style={{}}>
                                <img
                                  className="mb-2"
                                  src={
                                    "https://picsum.photos/200" || (
                                      <Skeleton
                                        // count={1}
                                        enableAnimation="true"
                                        circle
                                        width={"10%"}
                                        height={"50%"}
                                      />
                                    )
                                  }
                                  alt="Author"
                                  style={{
                                    borderRadius: "50%",

                                    height: "90px",
                                    marginLeft: "450px",
                                  }}
                                />
                              </div>
                              <div className="item-owl">
                                <div className="test-review">
                                  <p>
                                    <img
                                      src="images/left-quotes.png"
                                      alt="Left Quote"
                                    />
                                    {data?.quotation || (
                                      <Skeleton
                                        count={1}
                                        width={"100%"}
                                        enableAnimation="true"
                                        height={"20%"}
                                      />
                                    )}
                                    <img
                                      src="images/right-quotes.png"
                                      alt="Right Quote"
                                    />
                                  </p>
                                  <h5 className="testimonial_name">
                                    {data?.writer || (
                                      <Skeleton
                                        count={1}
                                        width={"10%"}
                                        enableAnimation="true"
                                        height={"100%"}
                                      />
                                    )}
                                  </h5>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        })
                      ) : (
                        <>
                          <Skeleton
                            // count={1}
                            enableAnimation="true"
                            circle
                            width={"10%"}
                            height={"50%"}
                            style={{ background: "center", marginLeft: "45%" }}
                          />
                          <Skeleton
                            enableAnimation="true"
                            width={"100%"}
                            height={"20%"}
                          />
                        </>
                      )}
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
