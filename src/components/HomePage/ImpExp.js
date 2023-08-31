import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default async function ImproveExp() {
  let data = {};

  try {
    // const delay = (ms  => new Promise((resolve) => setTimeout(resolve, ms));
    // await delay(3000);
    const api = `http://127.0.0.1:8000/home/all`;
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
    const res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data.status) {
      data = data.response.experience;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <section className="partners_section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_main">
              <span className="main_text">
                {data?.[0]?.header || <Skeleton count={1} width={100} />}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="title_dec">
              {data?.[0]?.title || <Skeleton count={1} width={100} />}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="left_img">
              <div className="slide">
                {data?.[0]?.imageurl ? (
                  <Image
                    src={data[0]?.imageurl}
                    className="img-fluid"
                    height={420}
                    width={520}
                    alt="Call Center"
                  />
                ) : (
                  <Skeleton
                    enableAnimation={true}
                    style={{ width: 500, height: "250px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_text">
              {/* <h2> {data?.[0]?.title || <Skeleton count={2} />}</h2> */}
              <p>{data?.[0]?.desc || <Skeleton count={8} />}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
