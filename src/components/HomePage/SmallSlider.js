"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SmallSlider() {
  const [data, setData] = useState([]);

  const getSmallSliderData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/home/all");
      const data = await response.json();

      if (data.status) {
        setData(data.response.technology_partner);
      } else {
        setData(false);
      }
    } catch (error) {
      console.log("error", error);
      setData(false);
    }
  };

  useEffect(() => {
    getSmallSliderData();
  }, []);

  return (
    <>
      <section className="partners_section pt-1 pb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="title_small">
                <span className="blue_text mt-5">Our</span>
                <br />
                Technology
                <br />
                Partners
              </div>
            </div>

            <div className="col-md-10">
              <div className="partners_logos slider">
                {data?.length ? (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {data?.map((el, index) => {
                      return (
                        <SwiperSlide key={el?.image_url?.[index]}>
                          <div className="slide">
                            <img
                              src={el?.image_url || <Skeleton circle />}
                              alt="Partner Logo 1"
                            />
                          </div>
                          <p style={{ color: "black", textAlign: "center" }}>
                            {el?.title || <Skeleton />}
                          </p>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <>
                    <div className="row">
                    {[1, 2, 3, 4].map((index) => (
                        <div className="col-md-3 pt-3 text-center" key={index}>
                          <Skeleton width={"75%"} height={"150px"} circle />
                          <Skeleton width={"80%"} />
                        </div>
                    ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
