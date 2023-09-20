"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Counter({ data1 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <section className="counts_section">
        <div className="container-fluid">
          {data1?.length ? (
            <div className="row mb-2" ref={ref}>
              {inView && (
                <>
                  {data1?.map((data, i) => {
                    return (
                      <div className={`col-md-3 count${i + 1}`} key={i}>
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
                            ></CountUp>
                          </h1>

                          <p className="count_text">
                            {data?.text || <Skeleton count={1} width={"70%"} />}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          ) : (
            <>
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-md-3">
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
