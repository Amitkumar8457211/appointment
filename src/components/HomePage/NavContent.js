"use client";
import React, { useState } from "react";

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
  return (
    <>
      <section class="consulting_section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">Get your free consulting </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="title_dec">
                We have the best experts to elevate your business to the next
                level, try this and you will see!
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-4">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {tabsarr?.map((el, index) => {
                  return (
                    <>
                      <a
                        class={
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
                    </>
                  );
                })}
              </div>
            </div>
            <div class="col-md-9 col-8">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
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
