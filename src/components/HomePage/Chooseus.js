import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

export default async function Chooseus() {
  let data = {};
  try {
    const api = "http://127.0.0.1:8000/home/all";
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
    const res = await fetch(api, { next: { revalidate: 30 } });

    data = await res.json();
    if (data.status) {
      // data = data.response.whychoose;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <section className="why_choose_us_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Blogs</span>
              </div>
            </div>
          </div>
          <div className="row  mb-5">
            {data?.length ? (
              <>
                {data.map((el, index) => {
                  return (
                    <div className="col-md-4" key={el?.icon?.[index]}>
                      <div className="service_section">
                        <div className="service_icon w-25 m-auto text-center">
                          <img src={el?.icon} className="img-fluid" />
                        </div>
                        <h2 className="text-center mb-3">{el?.title}</h2>
                        <p className="text-left">{el?.description}</p>
                        <Link href={`/${el.title.replace(/ /g, " ")}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            style={{ border: "none", borderRadius: "2px" }}
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
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
