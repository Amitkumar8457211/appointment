"use client";
import { axiosApi } from "@/axios";
import React, { useLayoutEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

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

  useLayoutEffect(() => {
    getAllServices();
    const button = ref.current;

    if (button) {
      button.click();
    }
  }, []);

  return (
    <section className="main_section mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <aside className="left_sidebar">
              {loading ? (
                <>
                  <Skeleton count={18} />
                </>
              ) : (
                <ul className="sidebar_menu">
                  {first?.data?.map((evale, index) => {
                    return (
                      <li key={index}>
                        <a
                          // key={index}
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
              )}
            </aside>
          </div>
          <div className="col-md-9">
            <div className="right_content solution_content">
              {loading ? (
                <>
                  <Skeleton
                    count={1}
                    enableAnimation={true}
                    style={{ width: "100%", height: "425px" }}
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
