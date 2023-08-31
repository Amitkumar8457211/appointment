import Head from "next/head";
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
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        </div>
      )}

      {data?.about_us?.length ? (
        data.about_us?.map((el, ind) => {
          return (
            <section
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
                <div className="row">
                  {/* {ind % 1 ? ( */}
                  <div className="col-md-6">
                    <div className="left_img">
                      <div className="slide">
                        <img src={el?.image} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right_text">
                      <p>{el?.description}</p>
                    </div>
                  </div>
                  {/* ) : ( */}

                  {/* )} */}
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <Skeleton
          enableAnimation={true}
          style={{ width: "100%", height: "500px" }}
        />
      )}
      {/* {data?.about_us?.length ? (
          data?.about_us[1]?.map((el, inde) => {
            return (
              <section className="about_content pt-5 pb-5 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="title_main">
                        <span className="main_text">{el?.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="right_text">
                        <p>{el.description}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="left_img">
                        <div className="slide">
                          <img src={el?.image} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <Skeleton 
            enableAnimation={true}
            style={{ width: "100%", height: "500px" }}
          />
        )} */}

      {/* {data?.about_us?.length ? (
          data?.about_us[2]?.map((el, inde) => {
            return (
              <section className="about_content pt-5 pb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="title_main">
                        <span className="main_text">{el?.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="left_img">
                        <div className="slide">
                          <img src={el?.image} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="right_text">
                        <p>{el?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <Skeleton
            enableAnimation={true}
            style={{ width: "100%", height: "500px" }}
          />
        )} */}
    </>
  );
}
