"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Sidebar = ({ data1 }) => {
  // const [loading, setloading] = useState(true);
  const [first, setfirst] = useState({
    data: [],

    mainText: "",
    leftImage: "",
    rightText: "",
  });

  // const ref = useRef(null);
  // const getAllServices = async () => {
  //   try {
  //     setloading(true);
  //     const res = await axios(`http://127.0.0.1:8000/services/services`);
  //     if (res.data.status) {
  //       setfirst({
  //         ...first,
  //         data: res.data.response,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setloading(false);
  //   }
  // };

  var string1 = data1?.map((e) => e?.description?.split("."));

  // useEffect(() => {
  //   getAllServices();
  // }, []);

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
            {/* {loading ? (
              <>
                <Skeleton count={13} />
              </>
            ) : (
              <> */}
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
            {/* </>
            )} */}
          </div>
          <div className="col-md-9">
            <div className="right_content solution_content">
              {/* {loading ? (
                <>
                  <Skeleton
                    count={1}
                    enableAnimation={true}
                    style={{ width: "100%", height: "300px" }}
                  />
                </>
              ) : (
                <> */}
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
                      src={first?.leftImage}
                      className="img-fluid"
                      alt="services"
                    />
                  )}
                </div>
              </div>
              <div className="right_text mb-5">
                <p>{string1[0] || <Skeleton count={1} />}</p>
                <p>{string1[1] || <Skeleton count={1} />}</p>
                <p>{string1[2] || <Skeleton count={1} />}</p>
              </div>
              {/* </>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
