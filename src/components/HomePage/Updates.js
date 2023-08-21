"use client";
import { axiosApi } from "@/axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Updates() {
  const [first, setfirst] = useState([]);
  const [laoding, setlaoding] = useState(true);
  const getUpdates = async () => {
    try {
      setlaoding(true);
      const res = await axiosApi(`/home/updates`);
      if (res.data.responseWrapper.statusDescription.statusCode == 200) {
        setfirst(res.data.responseWrapper.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setlaoding(false);
    }
  };
  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <>
      <section className="our_updates_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Our Updates</span>
              </div>
            </div>
          </div>
          <div className="row">
            {laoding ? (
              <>
                <div className="col-md-4">
                  <Skeleton count={20} />
                </div>
                <div className="col-md-4">
                  <Skeleton count={20} />
                </div>
                <div className="col-md-4">
                  {" "}
                  <Skeleton count={20} />
                </div>
              </>
            ) : (
              <>
                {first?.map((el, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="news_update">
                        <div className="service_icon m-auto text-center">
                          <img src="images/update1.jpg" className="img-fluid" />
                        </div>
                        <div className="news_details">
                          <span>{el?.date}</span>-<span>root</span> -
                          <span>
                            <a className="blue_text" href="#">
                              News
                            </a>
                          </span>
                        </div>
                        <h2 className="mb-2 blue_text">{el?.title}</h2>
                        <p className="text-left">{el?.description}</p>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
