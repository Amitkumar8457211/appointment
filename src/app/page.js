import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
// import BootstrapSlider from "@/components/HomePage/BootstrapSlider";

const Slider = dynamic(() => import("@/components/HomePage/Slider"), {
  loading: () => <Skeleton count={3} />,
});
const SmallSlider = dynamic(() => import("@/components/HomePage/SmallSlider"), {
  loading: () => <h1> loading </h1>,
});
const ImproveExp = dynamic(() => import("@/components/HomePage/ImpExp"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});
const WideArrayServices = dynamic(
  () => import("@/components/HomePage/WideArrayServices"),
  {
    loading: () => (
      <div className="text-center">
        <Skeleton
          enableAnimation={true}
          style={{ width: "80%", height: "300px" }}
        />
      </div>
    ),
  }
);
const Experts = dynamic(() => import("@/components/HomePage/Experts"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});
const Chooseus = dynamic(() => import("@/components/HomePage/Chooseus"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});
const OurExperts = dynamic(() => import("@/components/HomePage/OurExperts"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});
const NavContent = dynamic(() => import("@/components/HomePage/NavContent"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});

const Counter = dynamic(() => import("@/components/HomePage/Counter"), {
  loading: () => (
    <div className="row">
      <div className="col-md-3">
        <Skeleton enableAnimation={true} style={{ height: "300px" }} />
      </div>
    </div>
  ),
});
const Testimonial = dynamic(() => import("@/components/HomePage/Testimonial"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});
export default async function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton count={3} />}>
        <Slider />
      </Suspense>
      <Suspense fallback={<Skeleton circle count={3} />}>
        <SmallSlider />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <ImproveExp />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <WideArrayServices />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <Experts />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <NavContent />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton enableAnimation={true} style={{ height: "300px" }} />
        }
      >
        <Counter />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <Testimonial />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <Chooseus />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <OurExperts />
      </Suspense>

      {/* <Updates data={data[0]?.value?.data?.response?.our_updates} /> */}
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
