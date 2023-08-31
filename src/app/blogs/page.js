import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default async function page() {
  let data = {};
  try {
    const api = "http://127.0.0.1:8000/blogs/all";
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
    const res = await fetch(api, { next: { revalidate: 30 } });

    data = await res.json();
    if (data.status) {
      data = data.response.article_page;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <section className="our_updates_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Our Blogs</span>
              </div>
            </div>
          </div>
          <div className="row">
            {data?.length ? (
              data?.map((el, index) => {
                return (
                  <div
                    className="col-md-4"
                    style={{ borderRadius: "5px 5px 5px 5px" }}
                    key={index}
                  >
                    <div className="news_update">
                      <div className="service_icon m-auto text-center">
                        <Image
                          height={300}
                          width={400}
                          src={el?.image}
                          style={{ minHeight: "210px" }}
                          className="img-fluid"
                          alt="blogs picture"
                        />
                      </div>

                      <h2
                        style={{ fontSize: "1.2rem", minHeight: "70px" }}
                        className="mb-2 blue_text"
                      >
                        {el?.title.substring(0, 60) + "..."}
                      </h2>
                      <p className="text-left" style={{ minHeight: "150px" }}>
                        {el?.description.substring(0, 150) + "..."}
                      </p>
                      {/* <p>
                        <Link href={`${el?.title?.replace(/g/, "")}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Read More
                          </button>
                        </Link>
                      </p> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="col-md-4 ms-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
                <div className="col-md-4 ms-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
                <div className="col-md-4 ms-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
                <div className="col-md-4 ms-3 mt-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
                <div className="col-md-4 ms-3 mt-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
                <div className="col-md-4 ms-3 mt-3">
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: "100% ", height: "250px" }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
