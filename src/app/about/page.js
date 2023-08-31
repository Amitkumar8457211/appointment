import LHS from "@/components/About/LHS";
import RHS from "@/components/About/RHS";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export const metadata = {
  title: "About us",
  description: "About us Section",
};
export default async function page() {
  let data = {};
  try {
    const api = `${process.env.API_MASTER}/about/all`;
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
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
                    <span className="page_title">{e?.title}</span>
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
                      <span className="main_text">{el?.title}</span>
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
