import axios from "axios";
import React from "react";

const getServerSideProps1 = async () => {
  try {
    const res1 = axios(`http://127.0.0.1:8000/blogs/all`);

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
      <div className="container-fluid p-5">
        <p
          className="fw-bolder"
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Our Latest Blogs
        </p>
        <div className="row">
          {data[0].value.data?.responseWrapper.data?.map((eleven, index) => {
            return (
              <div className="col-md-3">
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
        </div>{" "}
      </div>
    </>
  );
}
