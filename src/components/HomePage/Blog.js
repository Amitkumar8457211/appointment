import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

export default async function Blog() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/blogs/home`;
    const res = await fetch(api, { next: { revalidate: 30 } });

    data = await res.json();
    if (data.status) {
      data = data.response.blog;
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
                        {el?.image ? (
                          <Image
                            title={el?.image}
                            height={300}
                            width={400}
                            src={el?.image}
                            blurDataURL="/images/blurImage.webp"
                            style={{ minHeight: "240px" }}
                            className="img-fluid"
                            alt={el?.title?.substring(0, 6)}
                          />
                        ) : (
                          <div className="col-md-12">
                            <Skeleton
                              enableAnimation={true}
                              style={{ width: "100%", height: "200px" }}
                            />
                          </div>
                        )}
                      </div>

                      <h2
                        style={{
                          fontSize: "1.2rem",
                          minHeight: "70px",
                          textAlign: "center",
                        }}
                        className="mb-2 blue_text"
                      >
                        {el?.title.substring(0, 60) + "..." || (
                          <Skeleton count={3} />
                        )}
                      </h2>
                      <p className="text-left" style={{ minHeight: "150px" }}>
                        {el?.description.substring(0, 150) + "..." || (
                          <Skeleton count={4} />
                        )}
                      </p>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
