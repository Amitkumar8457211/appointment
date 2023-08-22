"use client";
import { axiosApi } from "@/axios";
import React, { useLayoutEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Counter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [first, setfirst] = useState([]);
  const [loading, setloading] = useState(true);

  const counterData = async () => {
    try {
      setloading(true);
      const res = await axiosApi(`/home/counter`);
      if (res.data.responseWrapper.statusDescription.statusCode == 200) {
        setfirst(res.data.responseWrapper.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useLayoutEffect(() => {
    counterData();
  }, []);

  return (
    <>
      <section className="counts_section">
        <div className="container-fluid">
          <div className="row mb-2" ref={ref}>
            {loading ? (
              <>
                {[1, 2, 3, 4].map((index) => (
                  <div className="col-md-3" key={index}>
                    <Skeleton count={1} width={"100%"} height={"250px"} />
                  </div>
                ))}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
