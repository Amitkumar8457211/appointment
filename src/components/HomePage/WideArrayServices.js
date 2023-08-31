import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default async function WideArrayServices() {
  let data = {};
  try {
    const api = "http://127.0.0.1:8000/home/all";
    const res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data.status) {
      data = data.response.services;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Why TMP Direct ?</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                We have the experts to elevate your brand’s customer experience
              </div>
            </div>
          </div>
          <div className={data?.length > 0 ? "row" : ""}>
            {data.length ? (
              data?.map((e, index) => {
                return (
                  <div className="col-md-4 mb-3" key={e?.title[index]}>
                    <div
                      className="service_section"
                      style={{ minHeight: "370px" }}
                    >
                      <div className="service_icon w-25 m-auto text-center">
                        <Image
                          src={e?.logo}
                          height={100}
                          width={100}
                          className="img-fluid"
                          alt="Omnichannel Services"
                        />
                      </div>
                      <h2
                        style={{ fontSize: "1.5rem" }}
                        className="text-center mb-3"
                      >
                        {e?.title || <Skeleton count={1} width={100} />}
                      </h2>
                      <p className="text-left">
                        {e?.desc?.substring(0, 250) + "..." || (
                          <Skeleton count={4} width={100} />
                        )}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="row">
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
