"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { axiosApi } from "@/axios";

export default function TopSlider() {
  const [first, setfirst] = useState([]);
  const [loading, setloading] = useState(false);
  const getAllCarousel = async () => {
    try {
      setloading(true);
      const res = await axiosApi(`/home/carousel`);

      if (res.data.responseWrapper.statusDescription.statusCode == 200) {
        setloading(false);

        setfirst(res.data.responseWrapper.data);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCarousel();
  }, []);

  console.log(first, "ll");

  // Main Slider

  return (
    <>
      <section className="banner_section">
        <>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {first?.map((el, index) => {
              return (
                <div
                  key={index}
                  slot="container-start"
                  className="parallax-bg"
                  style={{
                    backgroundImage: `url(${el?.imageUrl})`,
                  }}
                  data-swiper-parallax="-23%"
                ></div>
              );
            })}
            {first?.map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="title" data-swiper-parallax="-300">
                    {el?.title}
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    {el?.subtitle}
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>{el?.text}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </section>
    </>
  );
}
