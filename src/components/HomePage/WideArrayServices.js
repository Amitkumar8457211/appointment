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
                <span className="main_text">A Wide Array of Services</span>
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
          <div className="row">
            {data.length ? (
              data?.map((e, index) => {
                return (
                  <div className="col-md-3">
                    <div className="service_section">
                      <div className="service_icon w-25 m-auto text-center">
                        <img
                          src="images/w1.png"
                          className="img-fluid"
                          alt="Omnichannel Services"
                        />
                      </div>
                      <h2 className="text-center mb-3">
                        {e?.title || <Skeleton count={1} width={100} />}
                      </h2>
                      <p className="text-left">
                        {e?.desc || <Skeleton count={4} width={100} />}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-md-3">
                <Skeleton
                  enableAnimation={true}
                  style={{ width: 500, height: "250px" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
