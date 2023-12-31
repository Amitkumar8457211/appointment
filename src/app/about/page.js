import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LHS from "@/components/About/LHS";
import RHS from "@/components/About/RHS";

export async function generateMetadata() {
  try {
    const api = `http://127.0.0.1:8000/about/all`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    const seores = await res.json();
    return {
      metadataBase: new URL('http://localhost:3000/'),
      title: seores?.response?.seo?.[0]?.title,
      description: seores?.response?.seo?.[0]?.desc,
      keywords: seores?.response?.seo?.[0]?.keyword,
      alternates: {
        canonical: '/about/',
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

export default async function page() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/about/all`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data?.status) {
      data = data.response;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      {data?.banner?.length ? (
        data.banner.map((e, i) => {
          return (
            <section
              key={i}
              className="banner_section about_page inner_page"
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
          <div className="text-center p-2">
            <Skeleton
              enableAnimation={true}
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </div>
      )}

      {data?.about_us?.length ? (
        data.about_us?.map((el, ind) => {
          return (
            <section
              key={ind}
              className={
                ind % 2
                  ? "about_content pt-5 pb-5 bg-light"
                  : "about_content pt-5 pb-5 "
              }
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title_main">
                      <span className="main_text">
                        {el?.title || <Skeleton count={1} />}
                      </span>
                    </div>
                  </div>
                </div>
                {ind % 2 == 0 ? <LHS data={el} /> : <RHS data={el} />}
              </div>
            </section>
          );
        })
      ) : (
        <>
          {/* <div className="text-center"> */}
          <Skeleton
            enableAnimation={true}
            style={{ width: "50%", height: "500px" }}
          />
          <Skeleton
            enableAnimation={true}
            style={{ width: "50%", height: "500px" }}
          />
          <Skeleton
            enableAnimation={true}
            style={{ width: "50%", height: "500px" }}
          />
          {/* </div> */}
        </>
      )}
    </>
  );
}
