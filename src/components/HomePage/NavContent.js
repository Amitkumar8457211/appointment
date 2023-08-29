"use client";
import { axiosApi } from "@/axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function NavContent({ data }) {
  const [Content, setContent] = useState("");
  const [first, setfirst] = useState([]);
  const [laoding, setlaoding] = useState(false);

  useEffect(() => {
    if (data?.length > 0) {
      document.getElementById("v-pills-0-tab")?.click();
    }
  }, [data]);

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
                {laoding ? (
                  <>
                    <Skeleton count={18} />
                  </>
                ) : (
                  <>
                    {data?.map((el, index) => {
                      return (
                        <div>
                          <a
                            className={
                              el.content === Content
                                ? "nav-link active"
                                : "nav-link"
                            }
                            id={`v-pills-${index}-tab`}
                            data-toggle="pill"
                            role="tab"
                            aria-controls={`v-pills-${index}`}
                            aria-selected="true"
                            onClick={() => {
                              setContent(el?.content);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {el?.name}
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>

            {laoding ? (
              <div className="col-md-9 col-8">
                <Skeleton
                  enableAnimation={true}
                  style={{ width: "100%", height: "425px" }}
                />
              </div>
            ) : (
              <>
                <div className="col-md-9 col-8">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id={`v-pills-home`}
                      role="tabpanel"
                      aria-labelledby={`v-pills-home-tab`}
                    >
                      {Content}
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
