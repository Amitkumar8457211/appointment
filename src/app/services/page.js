import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Sidebar = dynamic(() => import("@/components/Services/Sidebar"), {
  loading: () => (
    <div className="container-fluid">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});

export async function generateMetadata() {
  try {
    const api = `http://127.0.0.1:8000/services/services`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    const seores = await res.json();
    return {
      title: seores?.response?.seo?.[0]?.title,
      description: seores?.response?.seo?.[0]?.description,
      keywords: seores?.response?.seo?.[0]?.keyword,
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

export default async function page() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/services/services`;
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
      {data?.banner?.length ? (
        data.banner.map((e, ind) => {
          return (
            <section
              className="banner_section resource_center_page inner_page"
              key={ind}
              style={{ backgroundImage: `url(${e?.image})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 p-0">
                    <span className="page_title">
                      {e?.title || <Skeleton count={1} />}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="container-fluid">
          <Skeleton
            enableAnimation={true}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      )}
      <Suspense
        fallback={
          <div className="container-fluid">
            <Skeleton
              enableAnimation={true}
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        }
      >
        <Sidebar data1={data?.services} />
      </Suspense>
    </>
  );
}
