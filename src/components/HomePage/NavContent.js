"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

export default function NavContent({ data1 }) {
  const [Content, setContent] = useState("");
  useEffect(() => {
    if (data1?.length > 0) {
      document.getElementById("v-pills-0-tab")?.click();
    }
  }, [data1]);

  return (
    <>
      <section className="consulting_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Get your free consulting </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                We have the best experts to elevate your business to the next
                level, try this and you will see!
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-4">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {!data1?.length ? (
                  <>
                    <Skeleton count={18} />
                  </>
                ) : (
                  <>
                    {data1?.map((el, index) => {
                      return (
                        <div key={index}>
                          <a
                            className={
                              el?.name === Content.name
                                ? "nav-link active"
                                : "nav-link"
                            }
                            id={`v-pills-${index}-tab`}
                            data-toggle="pill"
                            role="tab"
                            aria-controls={`v-pills-${index}`}
                            aria-selected="true"
                            onClick={() => {
                              setContent(el);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {el?.name || <Skeleton count={1} />}
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>

            {!data1.length ? (
              <div className="col-md-9 col-8">
                <Skeleton
                  enableAnimation={true}
                  style={{ width: "100%", height: "425px" }}
                />
              </div>
            ) : (
              <>
                <div className="col-md-9 col-8 ">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="row">
                      <div className="col-md-4">
                        {!Content?.image ? (
                          <Skeleton width={"100%"} height={"100%"} />
                        ) : (
                          <Image
                            src={Content?.image}
                            width={250}
                            height={500}
                            alt="Picture of the author"
                            unoptimised={true}
                          ></Image>
                        )}
                      </div>
                      <div className="col-md-8">
                        <h3>
                          {Content.content_title || <Skeleton count={2} />}
                        </h3>
                        <hr />
                        <div
                          className="tab-pane fade show active"
                          id={`v-pills-home`}
                          role="tabpanel"
                          aria-labelledby={`v-pills-home-tab`}
                        >
                          <p>{Content?.content || <Skeleton count={13} />} </p>
                        </div>
                      </div>
                    </div>
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
