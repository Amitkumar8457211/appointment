"use client";
import { axiosApi } from "@/axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Sidebar = () => {
  const [loading, setloading] = useState(true);
  const [first, setfirst] = useState({
    data: [],
    mainText: "",
    leftImage: "",
    rightText: "",
  });

  const ref = useRef(null);
  const getAllServices = async () => {
    try {
      setloading(true);
      const res = await axiosApi(`/services/all`);
      if (res.data.responseWrapper.statusDescription.statusCode == 200) {
        setfirst({
          ...first,
          data: res.data.responseWrapper.data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  var string1 = first?.rightText.split(".");

  useEffect(() => {
    getAllServices();
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (typeof document !== undefined) {
        if (first?.data?.length > 0) {
          // setTimeout(() => {
          document.getElementById("sidebar0").click();
          // }, 500);
        }
      }
    }
  }, [first?.data]);

  return (
    <section className="main_section mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {loading ? (
              <>
                <Skeleton count={13} />
              </>
            ) : (
              <>
                <aside className="left_sidebar">
                  <ul className="sidebar_menu">
                    {first?.data?.map((evale, index) => {
                      console.log(evale, "objects");
                      return (
                        <li key={evale?.name[index]}>
                          <a
                            className={
                              first?.name === evale?.name
                                ? "sidebar-active"
                                : "sidebar"
                            }
                            onClick={() => {
                              setfirst({
                                ...first,
                                mainText: evale?.mainText,
                                leftImage: evale?.leftImage,
                                rightText: evale?.rightText,
                              });
                            }}
                            id={`sidebar${index}`}
                            ref={ref}
                            style={{ cursor: "pointer" }}
                          >
                            {evale?.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
              </>
            )}
          </div>
          <div className="col-md-9">
            <div className="right_content solution_content">
              {loading ? (
                <>
                  <Skeleton
                    count={1}
                    enableAnimation={true}
                    style={{ width: "100%", height: "300px" }}
                  />
                </>
              ) : (
                <>
                  <div className="title_main text-left">
                    <span className="main_text">{first?.mainText}</span>
                  </div>
                  <div className="left_img">
                    <div className="slide">
                      <img src={first?.leftImage} className="img-fluid" />
                    </div>
                  </div>
                  <div className="right_text mb-5">
                    <p>{string1[0]}</p>
                    <p>{string1[1]}</p>
                    <p>{string1[2]}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
