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

  const sliderData = async () => {
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
  };
  useEffect(() => {
    sliderData();
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
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.length &&
              data?.map((el, index) => {
                return (
                  <SwiperSlide
                    key={el?.title?.[index]}
                    style={{ height: "500px" }}
                  >
                    <div
                      key={el?.imageUrl?.[index]}
                      slot="container-start"
                      className="parallax-bg"
                      style={{
                        backgroundImage: `url(${el?.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      data-swiper-parallax="-23%"
                    ></div>
                    <div
                      style={{
                        paddingTop: "150px",
                        width: "50vW",
                      }}
                    >
                      <div
                        className="title"
                        style={{
                          padding: "15px",
                          backgroundColor: "rgba(0,0,0,0.4)",
                          borderRadius: "30px 30px 0px 0px",
                        }}
                        data-swiper-parallax="-500"
                      >
                        {el?.title || <Skeleton width={300} />}
                      </div>
                      <div
                        className="subtitle"
                        style={{
                          padding: "15px",
                          backgroundColor: "rgba(0,0,0,0.4)",
                          borderRadius: "0px 0px 30px 30px",
                        }}
                        data-swiper-parallax="-400"
                      >
                        {el?.subtitle || <Skeleton width={300} />}
                      </div>
                    </div>
                    {/* <div className="text" data-swiper-parallax="-300">
                      <p>{el?.text || <Skeleton width={300} />}</p>
                    </div> */}
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
