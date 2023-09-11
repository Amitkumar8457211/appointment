import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default async function OurExperts() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/home/all`;
    let res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data.status) {
      data = data.response.experts;
    }
  } catch (error) {
    console.log("error", error);
  }
  return (
    <>
      <section className="our_experts_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text text-white">Our Experts</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec text-white">
                Meet Our Awesome & Hard working People
              </div>
            </div>
          </div>
          <div className="row">
            {data?.map?.((el, index) => {
              return (
                <div className="col-md-3 mt-3" key={index}>
                  <div className="experts_des" style={{ minHeight: "413px" }}>
                    <div className="service_icon m-auto text-center">
                      <Image
                        height={300}
                        width={250}
                        src={el?.image}
                        blurDataURL="/images/blurImage.webp"
                        placeholder="blur"
                        className="img-fluid"
                        alt={el?.name}
                      />
                    </div>
                    <h2 className="text-center mb-3 blue_text">
                      {el?.name || <Skeleton count={1} />}
                    </h2>
                    <p className="text-left">
                      {el?.about.substring(0, 85) + "..." || (
                        <Skeleton count={5} />
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
