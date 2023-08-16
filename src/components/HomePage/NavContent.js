"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";

export default function NavContent() {
  const [Content, setContent] = useState("");
  const tabsarr = [
    { name: "Customer Service", content: "Here is the content1" },
    { name: "Lead Management", content: "Here is the content2" },
    { name: "Cross-Selling", content: "Here is the content3" },

    { name: "Retention", content: "Here is the content4" },
    { name: " C-Sat / NPS", content: "Here is the content5" },
    { name: "Analytics & Insights", content: "Here is the content6" },
    { name: "IT", content: "Here is the content7" },
    { name: "Industries Served", content: "Here is the content8" },
  ];

  const ActiveContent = (content) => {
    setContent(content);
  };
  useLayoutEffect(() => {
    document.getElementById("v-pills-0-tab").click();
  }, []);

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
                {tabsarr?.map((el, index) => {
                  return (
                    <>
                      <div key={index}>
                        <a
                          key={index}
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
                            ActiveContent(el?.content);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {el?.name}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
