import axios from "axios";
import Link from "next/link";
import React from "react";

export default async function page() {
  let data = {};
  try {
    const api = "http://127.0.0.1:8000/blogs/all";
    // const api = "http://127.0.0.1/api/candidate-details/candidate-details/heading.json";
    const res = await fetch(api, { next: { revalidate: 30 } });

    data = await res.json();
    if (data.responseWrapper.statusDescription.statusCode === 200) {
      data = data.responseWrapper.data;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <div className="container-fluid p-5">
        <p
          className="fw-bolder"
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Our Latest Blogs
        </p>
        <div className="row">
          {data?.map((eleven, index) => {
            console.log("hhhh", eleven?.title.replace(/" "/g, "-"));
            return (
              <div className="col-md-3 mt-3" key={index}>
                <div className="news_update">
                  <div className="service_icon m-auto text-center">
                    <img src="images/update1.jpg" className="img-fluid" />
                  </div>
                  <div className="news_details">
                    <span>{eleven?.date}</span> -<span>root</span> -
                    <span>
                      <a className="blue_text" href="#">
                        News
                      </a>
                    </span>
                  </div>
                  <h2 className="mb-2 blue_text">{eleven?.title}</h2>
                  <p className="text-left">{eleven?.description}</p>
                  {/* <p>
                    <Link href={`${eleven?.title.replace(/" "/g, "-")}`}>
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
          })}
        </div>{" "}
      </div>
    </>
  );
}
