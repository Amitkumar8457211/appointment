import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  loading: () => (
    <div className="container-fluid">
      <Skeleton
        enableAnimation={true}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  ),
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

// Seo Data

export async function generateMetadata() {
  try {
    const api = `http://127.0.0.1:8000/home/all`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    const seores = await res.json();
    return {
      metadataBase: new URL('http://localhost:3000/'),
      title: seores?.response?.seo?.[0]?.title,
      description: seores?.response?.seo?.[0]?.desc,
      keywords: seores?.response?.seo?.[0]?.keyword,
      alternates: {
        canonical: '/',
      },
      openGraph: {
        title: seores?.response?.seo?.[0]?.title,
        description: seores?.response?.seo?.[0]?.desc,
        url: '/',
        siteName: seores?.response?.seo?.[0]?.title,
        images: [
          {
            url: seores?.response?.seo?.[0]?.og_image,
            width: 800,
            height: 600,
          },
          {
            url: seores?.response?.seo?.[0]?.og_image,
            width: 1800,
            height: 1600,
            alt: seores?.response?.seo?.[0]?.title,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    };
  } catch (error) {
    console.log("error", error);
  }
}

export default async function Home() {
  var data = {};
  try {
    const api = `http://127.0.0.1:8000/home/all`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data.status) {
      data = data.response;
    }
  } catch (error) {
    console.log("error", error);
  }
  return (
    <>
      <Suspense fallback={<Skeleton count={3} />}>
        <Slider data1={data?.home_crousel} />
      </Suspense>
      <Suspense fallback={<Skeleton circle count={3} />}>
        <SmallSlider data1={data?.technology_partner} />
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
        <NavContent data1={data?.navcontent} />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton enableAnimation={true} style={{ height: "300px" }} />
        }
      >
        <Counter data1={data?.counter} />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            enableAnimation={true}
            style={{ width: "auto", height: "300px" }}
          />
        }
      >
        <Testimonial data1={data?.testimonial} />
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
