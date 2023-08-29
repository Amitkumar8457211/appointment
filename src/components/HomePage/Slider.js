"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function TopSlider() {
  const [data, setData] = useState(false);

  // Main Slider

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    delay(1000).then(async () => {
      try {
        const response = await axios("http://127.0.0.1:8000/home/all");
        if (response.data.status) {
          setData(response.data.response.home_crousel);
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
      <section className="banner_section">
        {data?.length ? (
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
            {data?.length &&
              data?.map((el, index) => {
                return (
                  <div
                    key={el?.imageUrl?.[index]}
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                      backgroundImage: `url(${el?.imageUrl})`,
                    }}
                    data-swiper-parallax="-23%"
                  ></div>
                );
              })}
            {data?.length &&
              data?.map((el, index) => {
                return (
                  <SwiperSlide
                    key={el?.title?.[index]}
                    style={{ height: "600px" }}
                  >
                    <div className="title" data-swiper-parallax="-500">
                      {el?.title || <Skeleton width={300} />}
                    </div>
                    <div className="subtitle" data-swiper-parallax="-400">
                      {el?.subtitle || <Skeleton width={300} />}
                    </div>
                    <div className="text" data-swiper-parallax="-300">
                      <p>{el?.text || <Skeleton width={300} />}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        ) : (
          <Skeleton
            enableAnimation={true}
            style={{ width: "100%", height: "600px" }}
          />
        )}
      </section>
    </>
  );
}
