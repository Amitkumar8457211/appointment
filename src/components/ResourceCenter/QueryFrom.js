"use client";
import React from "react";

export default function QueryFrom() {
  const submitquery = (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <>
      <section className="about_content pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Customer Care Representatives</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/customer_care_representatives.jpg"
                    className="img-fluid"
                    alt="Customer Care Representatives"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="right_text">
                <p>
                  Our Customer Care Representatives are professionals who assist
                  our clients’ customers with their inquiries and complaints.
                  Consumers contact us on the phone, via email, text and chat.
                  We need great listeners and writers who want to help people
                  and can solve problems. We have both full and part-time shifts
                  available.
                </p>

                <p>What we look for in a candidate:</p>
                <ul className="listing mt-3">
                  <li>
                    2+ years customer service experience, preferably in a call
                    center environment
                  </li>
                  <li>Excellent customer service skills</li>
                  <li>Strong listening and problem-solving skills</li>
                  <li>Excellent writing skills</li>
                  <li>
                    Excellent computer skills (Word, Outlook, CRM and web-based
                    programs)
                  </li>
                  <li>Professionalism and reliability</li>
                  <li>Strong desire to help people and solve problems</li>
                  <li>Spanish or French bilingual a plus</li>
                </ul>
                <p>
                  If you are interested in learning more, please click here to
                  apply now. We look forward to hearing from you!
                </p>

                {/* Form */}
                <form onSubmit={submitquery} className="mt-5 p-3 bg-light">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Name</label>
                      <input type="text" required className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Address</label>
                      <input type="text" required className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input type="text" required className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>State</label>
                      <select className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label>Zip</label>
                      <input type="number" required className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Phone</label>
                      <input type="number" required className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email</label>
                      <input type="email" required className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Your relevant experience</label>
                      <textarea className="form-control" rows="2"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
                {/* Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
