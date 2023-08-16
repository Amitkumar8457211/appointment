"use client";
import React, { useLayoutEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section className="counts_section">
        <div className="container-fluid">
          <div className="row" ref={ref}>
            {inView && (
              <>
                <>
                  <div className="col-md-3 count1">
                    <div className="count_text_section text-center">
                      <h1 style={{ color: "white" }} className="counter mb-3">
                        <CountUp
                          start={0}
                          // decimals={2}
                          decimal=","
                          end={12000}
                          // prefix="INR"
                          // onEnd={() => console.log("Ended! 👏")}
                          // onStart={() => console.log("Started! 💨")}
                        >
                          <di style={{ display: "none" }}>
                            {({ countUpRef, start }) => (
                              <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                              </div>
                            )}
                          </di>
                        </CountUp>
                      </h1>

                      <p className="count_text">Staff worldwide</p>
                    </div>
                  </div>
                  <div className="col-md-3 count2">
                    <div className="count_text_section text-center">
                      <h1 className="counter mb-3">
                        {" "}
                        <CountUp
                          start={0}
                          // decimals={2}
                          decimal=","
                          end={300000}
                          // prefix="INR"
                          // onEnd={() => console.log("Ended! 👏")}
                          // onStart={() => console.log("Started! 💨")}
                        >
                          <div style={{ display: "none" }}>
                            {({ countUpRef, start }) => (
                              <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                              </div>
                            )}
                          </div>
                        </CountUp>
                      </h1>

                      <p className="count_text">Satisfied customers</p>
                    </div>
                  </div>
                  <div className="col-md-3 count3">
                    <div className="count_text_section text-center">
                      <h1 className="counter mb-3">
                        {" "}
                        <CountUp
                          start={0}
                          // decimals={2}
                          decimal=","
                          end={34}
                          // prefix="INR"
                          // onEnd={() => console.log("Ended! 👏")}
                          // onStart={() => console.log("Started! 💨")}
                        >
                          <div style={{ display: "none" }}>
                            {({ countUpRef, start }) => (
                              <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                              </div>
                            )}
                          </div>
                        </CountUp>
                      </h1>
                      <p className="count_text"> Years In the industry</p>
                    </div>
                  </div>
                  <div className="col-md-3 count4">
                    <div className="count_text_section text-center">
                      <h1 className="counter mb-3">
                        {" "}
                        <CountUp
                          start={0}
                          // decimals={2}
                          decimal=","
                          end={6}
                          // prefix="INR"
                          suffix="+"
                          // onEnd={() => console.log("Ended! 👏")}
                          // onStart={() => console.log("Started! 💨")}
                        >
                          <div style={{ display: "none" }}>
                            {({ countUpRef, start }) => (
                              <div>
                                <span ref={countUpRef} />
                                <button onClick={start}>Start</button>
                              </div>
                            )}
                          </div>
                        </CountUp>
                      </h1>
                      <p className="count_text">
                        Average # of services per client
                      </p>
                    </div>
                  </div>
                </>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
