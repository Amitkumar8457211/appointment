"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Sidebar = ({ data1 }) => {
  const [first, setfirst] = useState({
    data: [],

    mainText: "",
    leftImage: "",
    rightText: "",
  });
  var string1 = data1?.map((e) => e?.description?.split("."));

  useEffect(() => {
    if (typeof window !== undefined) {
      if (typeof document !== undefined) {
        if (data1?.length > 0) {
          // setTimeout(() => {
          document.getElementById("sidebar0").click();
          // }, 500);
        }
      }
    }
  }, [data1]);

  return (
    <section className="main_section mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <aside className="left_sidebar">
              <ul className="sidebar_menu">
                {data1?.map((evale, index) => {
                  return (
                    <li key={evale?.title[index]}>
                      <a
                        className={
                          first?.name === evale?.title
                            ? "sidebar-active"
                            : "sidebar"
                        }
                        onClick={() => {
                          setfirst({
                            ...first,
                            mainText: evale?.subtitle,
                            leftImage: evale?.image,
                            rightText: evale?.description,
                          });
                        }}
                        id={`sidebar${index}`}
                        style={{ cursor: "pointer" }}
                      >
                        {evale?.title || <Skeleton count={1} width={"50%"} />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
          <div className="col-md-9">
            <div className="right_content solution_content">
              <div className="title_main text-left">
                <span className="main_text">
                  {first?.mainText || <Skeleton count={1} />}
                </span>
              </div>
              <div className="left_img">
                <div className="slide">
                  {!first.leftImage ? (
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "100%", height: "300px" }}
                    />
                  ) : (
                    <Image
                      height={200}
                      width={700}
                      blurDataURL={first?.image}
                      placeholder="blur"
                      src={first?.leftImage}
                      className="img-fluid"
                      alt={first?.mainText}
                    />
                  )}
                </div>
              </div>
              <div className="right_text mb-5">
                <p>{string1[0] || <Skeleton count={1} />}</p>
                <p>{string1[1] || <Skeleton count={1} />}</p>
                <p>{string1[2] || <Skeleton count={1} />}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
