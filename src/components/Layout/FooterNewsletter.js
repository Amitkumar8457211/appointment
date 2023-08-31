"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const NewsletterSubmission = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`http://127.0.0.1:8000/getmail/getmail`, {
        email: email,
      });
      if (res.data.message == "Email added successfully") {
        Swal.fire({
          icon: "success",
          html: res.data.message,
          timer: 3000,
          timerProgressBar: true,
        });
        setEmail("");
      } else {
        Swal.fire({
          icon: "warning",
          html: res.data.message,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                  {loading ? (
                    <ColorRing
                      visible={true}
                      height="50"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        Join
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
