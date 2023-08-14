import React from "react";

export default function SmallSlider() {
  return (
    <>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="title_small">
                <span className="blue_text">Our</span>
                <br />
                Technology
                <br />
                Partners
              </div>
            </div>
            <div className="col-md-10">
              <div className="partners_logos slider">
                <div className="slide">
                  <img src="images/w1.png" alt="Partner Logo 1" />
                </div>
                <div className="slide">
                  <img src="images/w2.png" alt="Partner Logo 2" />
                </div>
                <div className="slide">
                  <img src="images/w3.png" alt="Partner Logo 3" />
                </div>
                <div className="slide">
                  <img src="images/w4.png" alt="Partner Logo 4" />
                </div>
                <div className="slide">
                  <img src="images/w1.png" alt="Partner Logo 5" />
                </div>
                <div className="slide">
                  <img src="images/w2.png" alt="Partner Logo 6" />
                </div>
                <div className="slide">
                  <img src="images/w3.png" alt="Partner Logo 7" />
                </div>
                <div className="slide">
                  <img src="images/w4.png" alt="Partner Logo 8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
