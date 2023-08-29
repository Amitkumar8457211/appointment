"use client";
import { axiosApi } from "@/axios";
import React, { useLayoutEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Counter({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [loading, setloading] = useState(true);

  return (
    <>
      <section className="counts_section">
        <div className="container-fluid">
          <div className="row mb-2" ref={ref}>
            {inView && (
              <>
                {data?.map((data, i) => {
                  return (
                    <>
                      <div className={`col-md-3 count${i + 1}`}>
                        <div className="count_text_section text-center">
                          <h1
                            style={{ color: "white" }}
                            className="counter mb-3"
                          >
                            <CountUp
                              start={0}
                              // decimals={2}
                              // decimal="."
                              duration={4}
                              end={data.value}
                              // prefix="INR"
                              separator=","
                              suffix={
                                data?.text ===
                                "Average # of services per client"
                                  ? "+"
                                  : ""
                              }
                              // onEnd={() => console.log("Ended! 👏")}
                              // onStart={() => console.log("Started! 💨")}
                            ></CountUp>
                          </h1>

                          <p className="count_text">{data?.text}</p>
                        </div>
                      </div>
                    </>
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
