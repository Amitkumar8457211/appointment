"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

export default function Testimonial({ data1 }) {
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
                        pauseOnMouseEnter: true,
                      }}
                      followFinger={true}
                      parallax="true"
                      grabCursor="true"
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      {data1?.length ? (
                        data1?.map((data, ind) => {
                          return (
                            <SwiperSlide key={ind}>
                              {" "}
                              <div style={{}}></div>
                              <div className="item-owl">
                                <div className="test-review text-center">
                                  <Image
                                    title={data?.image}
                                    src={data?.image || <Skeleton circle />}
                                    blurDataURL="/images/blurImage.webp"
                                    placeholder="blur"
                                    alt={data?.writer}
                                    height={100}
                                    width={100}
                                    onError={({ currentTarget }) => {
                                      currentTarget.onerror = null; // prevents looping
                                      currentTarget.srcset = "/images/blurImage.webp";
                                    }}
                                  />
                                  <h5 className="testimonial_name">
                                    {data?.writer || <Skeleton count={1} />}
                                  </h5>
                                  <br />
                                  <p>
                                    <Image
                                      title="/images/left-quotes.png"
                                      src="/images/left-quotes.png"
                                      alt="Left Quote"
                                      height={50}
                                      width={50}
                                      unoptimized={true}
                                    />
                                    {data?.quotation || (
                                      <Skeleton
                                        count={1}
                                        width={"100%"}
                                        enableAnimation="true"
                                        height={"20%"}
                                      />
                                    )}
                                    <Image
                                      title="/images/right-quotes.png"
                                      src="/images/right-quotes.png"
                                      alt="Right Quote"
                                      height={50}
                                      width={50}
                                      unoptimized={true}
                                    />
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        })
                      ) : (
                        <Skeleton
                          enableAnimation={true}
                          style={{ width: "100%", height: "300px" }}
                        />
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
