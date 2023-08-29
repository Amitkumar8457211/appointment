"use client";
import { axiosApi } from "@/axios";
import React, { useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const NewsletterSubmission = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosApi.post(`http://127.0.0.1:8000/home/getmail`, {
        email: email,
      });
      if (res.data.message == "Email added successfully") {
        setEmail("");
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="col-md-3">
        <div className="footer_details_text">
          <div className="footer_text">
            <h2 className="footer_title">Newsletter</h2>
            <div className="footer_widget">
              <p>
                For more information about our company, kindly provide your
                e-mail address.
              </p>
              <form onSubmit={NewsletterSubmission}>
                <div className="input-group mt-3">
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      Join
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
