"use client";
import { axiosApi } from "@/axios";
import React, { useLayoutEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [first, setfirst] = useState([]);

  const counterData = async () => {
    try {
      const res = await axiosApi(`/home/counter`);
      if (res.data.responseWrapper.statusDescription.statusCode == 200) {
        setfirst(res.data.responseWrapper.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    counterData();
  }, []);

  return (
    <>
      <section className="counts_section">
        <div className="container-fluid">
          <div className="row" ref={ref}>
            {inView && (
              <>
                {first?.map((data, i) => {
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
                              end={data.value?.toLocaleString("en-IN")}
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
