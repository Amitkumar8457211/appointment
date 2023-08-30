import React from "react";

export default async function OurExperts() {
  let data = {};
  try {
    // const delay = (ms  => new Promise((resolve) => setTimeout(resolve, ms));
    // await delay(3000);
    const api = "http://127.0.0.1:8000/home/all";
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
    let res = await fetch(api, { next: { revalidate: 30 } });
    data = await res.json();
    if (data.status) {
      data = data.response.experts;
    }
  } catch (error) {
    console.log("error", error);
  }
  return (
    <>
      <section className="our_experts_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text text-white">Our Experts</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec text-white">
                Meet Our Awesome & Hard working People
              </div>
            </div>
          </div>
          <div className="row">
            {data?.map?.((el, index) => {
              return (
                <div className="col-md-3 mt-3" key={index}>
                  <div className="experts_des">
                    <div className="service_icon m-auto text-center">
                      <img src={el?.image} className="img-fluid" />
                    </div>
                    <h2 className="text-center mb-3 blue_text">{el?.name}</h2>
                    <p className="text-left">{el?.about}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
