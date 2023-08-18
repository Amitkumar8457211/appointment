"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { axiosApi } from "@/axios";

export default function SmallSlider() {
  const [first, setfirst] = useState([]);
  const getAllCarousel = async () => {
    try {
      console.log("object");
      const res = await axiosApi(`/home/smallCarousel`);

      setfirst(res.data.responseWrapper.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCarousel();
    console.log("object");
  }, []);

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
                  {first?.map((el, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="slide">
                          <img src={el?.image_url} alt="Partner Logo 1" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
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
