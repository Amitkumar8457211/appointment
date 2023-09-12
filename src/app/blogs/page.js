import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export async function generateMetadata() {
  try {
    const api = `http://127.0.0.1:8000/blogs/all`;
    const res = await fetch(api, { next: { revalidate: 30 } });
    const seores = await res.json();
    return {
      title: seores?.response?.seo?.[0]?.title,
      description: seores?.response?.seo?.[0]?.desc,
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
    const api = `http://127.0.0.1:8000/blogs/all`;
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
                        {el?.image ? (
                          <Image
                            title={el?.image}
                            blurDataURL="/images/blurImage.webp"
                            placeholder="blur"
                            height={300}
                            width={400}
                            src={el?.image}
                            style={{ minHeight: "210px" }}
                            className="img-fluid"
                            alt={el?.title}
                          />
                        ) : (
                          <>
                            <div className="col-md-12">
                              <Skeleton
                                enableAnimation={true}
                                style={{ width: "100%", height: "200px" }}
                              />
                            </div>
                          </>
                        )}
                      </div>

                      <h2
                        style={{
                          fontSize: "1.2rem",
                          minHeight: "70px",
                          fontWeight: "900",
                        }}
                        className="mb-2 blue_text"
                      >
                        {el?.title || el?.title != "" ? (
                          el?.title.substring(0, 60) + "..."
                        ) : (
                          <Skeleton count={1} />
                        )}
                      </h2>
                      <p className="text-left" style={{ minHeight: "150px" }}>
                        {el?.description ? (
                          el?.description.substring(0, 150) + "..."
                        ) : (
                          <Skeleton count={5} />
                        )}
                      </p>
                      {/* <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        style={{ padding: "5px" }}
                        ok
                        sir
                      >
                        Read More
                      </button> */}
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
