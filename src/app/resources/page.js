import QueryFrom from "@/components/ResourceCenter/QueryFrom";
import axios from "axios";
import React from "react";

const getServerSideProps1 = async () => {
  try {
    const res1 = axios(`http://127.0.0.1:8000/resources/all`);

    // const res5 = axios(`http://127.0.0.1:8000/home/experts`);
    const allSettled = await Promise.allSettled([res1]);

    return allSettled;
  } catch (error) {
    console.log(error);
  }
};
export default async function page() {
  const data = await getServerSideProps1();

  return (
    <>
      <section className="banner_section resource_center_page inner_page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <span className="page_title">Resource Center</span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Blogs</span>
              </div>
            </div>
          </div>
          <div className="row">
            {data[0].value.data.responseWrapper.data?.map((data, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="news_update">
                    <div className="service_icon m-auto text-center">
                      <img
                        src={data?.image}
                        className="img-fluid"
                        alt="Update 1"
                      />
                    </div>
                    <div className="news_details">{data?.date}</div>
                    <h2 className="mb-2 blue_text">{data?.title}</h2>
                    <p className="text-left">{data?.description}</p>
                    <p>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="about_content pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Careers</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/career.jpg"
                    className="img-fluid"
                    alt="Careers"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="right_text">
                <p>
                  Moving to a Careers community is a big decision. Even if the
                  timing feels right, it’s natural to have many questions. If
                  you’re wondering whether Careers is the right move, our
                  counselors can help you weigh your options and decide what is
                  best for your loved one and you. Our Careers community
                  counselors interact with care-givers and their family members
                  in a professional manner, learn their family story, conduct
                  in-depth needs assessment, answer any FAQs and set up an
                  appointment for a community tour. Our professionals will
                  connect with your customers on a higher level, making them
                  feel listened-to, cared for and appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QueryFrom />
    </>
  );
}
