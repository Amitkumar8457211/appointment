import React, { Suspense } from "react";
import Head from "next/head";
import axios from "axios";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import SmallSlider from "@/components/HomePage/SmallSlider";
import NavContent from "@/components/HomePage/NavContent";
import Testimonial from "@/components/HomePage/Testimonial";
import Updates from "@/components/HomePage/Updates";
// import TopSlider from "@/components/HomePage/Slider";
import Counter from "@/components/HomePage/Counter";

const TopSlider = dynamic(() => import("@/components/HomePage/Slider"), {
  loading: () => <Skeleton count={3} />,
});
// const CandidateCard = dynamic(
//   () => import("../components/election/CandidateCard/CandidateCard"),
//   { loading: () => <Skeleton count={3} /> }
// );
// const CandidateCard = dynamic(
//   () => import("../components/election/CandidateCard/CandidateCard"),
//   { loading: () => <Skeleton count={3} /> }
// );
// const CandidateCard = dynamic(
//   () => import("../components/election/CandidateCard/CandidateCard"),
//   { loading: () => <Skeleton count={3} /> }
// );
// const CandidateCard = dynamic(
//   () => import("../components/election/CandidateCard/CandidateCard"),
//   { loading: () => <Skeleton count={3} /> }
// );
// const CandidateCard = dynamic(
//   () => import("../components/election/CandidateCard/CandidateCard"),
//   { loading: () => <Skeleton count={3} /> }
// );

const getServerSideProps1 = async () => {
  try {
    const res1 = axios(`http://127.0.0.1:8000/home/all`);

    // const res5 = axios(`http://127.0.0.1:8000/home/experts`);

    const allSettled = await Promise.allSettled([res1]);
    return allSettled;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home({ result }) {
  const data = await getServerSideProps1();

  return (
    <>
      <Suspense fallback={<Skeleton count={3} />}>
        <TopSlider />
      </Suspense>
      <Suspense fallback={<Skeleton circle count={3} />}>
        <SmallSlider />
      </Suspense>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Improve Your Experience</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                {data[0]?.value?.data?.response?.experience?.[0]?.header}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <div className="slide">
                  <img
                    src={
                      data[0]?.value?.data?.response?.experience?.[0]?.imageurl
                    }
                    className="img-fluid"
                    alt="Call Center"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_text">
                <h2>
                  {" "}
                  {data[0]?.value?.data?.response?.experience?.[0]?.title}
                </h2>
                <p>{data[0]?.value?.data?.response?.experience?.[0]?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">A Wide Array of Services</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                We have the experts to elevate your brand’s customer experience
              </div>
            </div>
          </div>
          <div className="row">
            {data[0]?.value?.data?.response?.services?.map((e, index) => {
              return (
                <div className="col-md-3">
                  <div className="service_section">
                    <div className="service_icon w-25 m-auto text-center">
                      <img
                        src="images/w1.png"
                        className="img-fluid"
                        alt="Omnichannel Services"
                      />
                    </div>
                    <h2 className="text-center mb-3">{e?.title}</h2>
                    <p className="text-left">{e?.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="experts_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="image_text">
                <h1>World Class CX Experts</h1>
                <p>
                  Our team aims to protect your customers from the competition
                  using best practices in both retention and outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavContent data={data[0]?.value?.data?.response?.navcontent} />

      <Counter data={data[0]?.value?.data?.response?.counter} />
      {/* Testimonial conetnt */}

      {/* Testimonial conetnt */}
      <Testimonial data={data[0]?.value?.data?.response?.testimonial} />
      <section className="why_choose_us_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Why choose Us</span>
              </div>
            </div>
          </div>
          <div className="row  mb-5">
            {data[0]?.value?.data?.response?.whychoose?.map((el, index) => {
              return (
                <div className="col-md-4" key={el?.icon?.[index]}>
                  <div className="service_section">
                    <div className="service_icon w-25 m-auto text-center">
                      <img src={el?.icon} className="img-fluid" />
                    </div>
                    <h2 className="text-center mb-3">{el?.title}</h2>
                    <p className="text-left">{el?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
            {data[0]?.value?.data?.response?.experts?.map?.((el, index) => {
              return (
                <div className="col-md-3 mt-3">
                  <div className="experts_des">
                    <div className="service_icon m-auto text-center">
                      <img src={el?.image} className="img-fluid" />
                    </div>
                    <h2 className="text-center mb-3 blue_text">{el?.name}</h2>
                    <p className="text-left">{el?.about}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Updates data={data[0]?.value?.data?.response?.our_updates} />
      <section className="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.5149376362447!2d-74.727421!3d40.904454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4b06f723c4be5e2!2sTMP%20Direct!5e0!3m2!1sen!2sin!4v1618039746097!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
