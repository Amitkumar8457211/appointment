import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

const Map = dynamic(() => import("@/components/HomePage/Map"), {
  loading: () => (
    <div className="text-center">
      <Skeleton
        enableAnimation={true}
        style={{ width: "90%", height: "300px" }}
      />
    </div>
  ),
});

const Slider = dynamic(() => import("@/components/HomePage/Slider"), {
  loading: () => <Skeleton count={3} />,
});
const SmallSlider = dynamic(() => import("@/components/HomePage/SmallSlider"), {
  loading: () => <Skeleton circle count={3} />,
});
const ImproveExp = dynamic(() => import("@/components/HomePage/ImpExp"), {
  loading: () => (
    <div className="text-center p-5   ">
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
      <div className="container">
        <div className="row p-3">
          <div className="col-md-4">
            <Skeleton
              count={12}
              enableAnimation={true}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <Skeleton
              count={12}
              enableAnimation={true}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <Skeleton
              count={12}
              enableAnimation={true}
              style={{ width: "100%" }}
            />
          </div>
        </div>
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
const Blog = dynamic(() => import("@/components/HomePage/Blog"), {
  loading: () => (
    <div className="container">
      <div className="row p-3">
        <div className="col-md-4">
          <Skeleton
            count={12}
            enableAnimation={true}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4    ">
          <Skeleton
            count={12}
            enableAnimation={true}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4    ">
          <Skeleton
            count={12}
            enableAnimation={true}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  ),
});
const OurExperts = dynamic(() => import("@/components/HomePage/OurExperts"), {
  loading: () => (
    <div className="container-fluid">
      <div className="text-center p-2">
        <Skeleton
          enableAnimation={true}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
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
            count={7}
            enableAnimation={true}
            style={{ width: "100%", height: "300px" }}
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
        <Blog />
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

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <Map />
      </Suspense>
    </>
  );
}
